<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        factory(App\User::class,10)->create();  
        factory(App\News::class,10)->create();  
        factory(App\Event::class,10)->create();  
        factory(App\Admin::class,1)->create();  

    }
}
