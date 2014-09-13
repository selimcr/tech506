<?php

namespace Tech506\CompanyBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('CompanyBundle:Default:index.html.twig', array('name' => $name));
    }
}
