#!/usr/bin/perl

use CGI;

my $q = CGI->new;

my $firstName = $q->param('firstName');
my $lastName = $q->param('lastName');

print "Content-type:text/html\r\n\r\n"; 
print "<!DOCTYPE html><html>";
print"<body>";
print"<h2>Hello, your name is $firstName $lastName</h2>";
foreach $field (%FORM) {
    print $field, "<br />";
}
print "</body>";
print "</html>";

