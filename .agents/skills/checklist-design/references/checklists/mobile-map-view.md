# Map View — Mobile app

The native map screen showing location-based content, user position, and contextual overlays

Source: https://www.checklist.design/mobile/map-view

## Items

### Pin and marker designs
Custom markers clearly distinguishable from each other and from the base map, sized for reliable tap accuracy on mobile

_Tip: Ensure the marker design for current location is the most prominent, as all map view interactions are centred around it_

### Marker clustering (if applicable)
How markers are shown when a group of them are so close together they cannot be shown individually, and must be grouped

### Native map components
Leverage either MapKit for iOS or Google Maps for Android to utilise existing foundations and layout that is time consuming to create from scratch

### Location permission
The point in the flow at which location permission is requested, with context explaining the level of access needed and why

_Tip: Consider the UI if permissions are denied, where you can provide instructions on how to change the permission in settings_

### Current location re-centre
A clearly visible button to re-centre the map to the user's current position without zooming or scrolling to it

### Selected item bottom sheet
Tapping a marker expanding a bottom sheet with details about that location — not a full-screen navigation away from the map.

### Search or filter actions
Search or filter controls accessible as a persistent overlay on the map or as a separate screen

_Tip: Selecting filters can be on a separate screen, but when on map the applied filters should be visible for context_

### Offline handling
When offline, cached map tiles displayed where available, with a clear indicator that the map may not be current
