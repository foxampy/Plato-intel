<?php

namespace App\Jobs;

use App\Models\Category;
use App\Models\ParameterGroup;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Cache;

class ProcessParameterGroups implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $parameterGroups = ParameterGroup::where('category_external_id','!=','0')->where('is_active',1)->get();
        foreach ($parameterGroups as $group){
            $category = Category::where('external_id',$group->category_external_id)->first();
            if($category){
                $group->update([
                    'category_id' => $category->id
                ]);
            }
        }
        //Cache::forget('allCategories');
    }
}
