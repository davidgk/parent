package com.parent.controllers;


import com.parent.model.Ping;
import org.springframework.web.bind.annotation.*;

@RestController
public class PingController {

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/api/ping")
    public Ping saidPing(@RequestParam(value="pong", defaultValue="ping-pong") String ping) {
        return new Ping(ping);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(method = RequestMethod.POST, value = "/api/ping/create")
    public Ping createAPing(@RequestBody Ping ping) {
        String newPing = "Did You said " + ping.getPingValue();
        return new Ping(newPing);
    }

}
