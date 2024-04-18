<?php

namespace App\Jobs;

use App\Models\Category;
use App\Models\Parameter;
use App\Models\ParameterGroup;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Cache;

class ProcessParameters implements ShouldQueue
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
        $parameters = Parameter::where('category_external_id','!=',null)->where('is_active',1)->get();
        foreach ($parameters as $parameter){
            $category = Category::where('external_id',$parameter->category_external_id)->first();
            if($category){
                $parameter->update([
                    'category_id' => $category->id
                ]);
            }
        }

        $parameters = Parameter::where('parameter_group_external_id','!=',null)->where('is_active',1)->get();
        foreach ($parameters as $parameter){
            $group = ParameterGroup::where('external_id',$parameter->parameter_group_external_id)->first();
            if($group){
                $parameter->update([
                    'parameter_group_id' => $group->id
                ]);
            }
        }
    }
}
