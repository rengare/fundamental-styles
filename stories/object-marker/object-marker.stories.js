import '../../dist/object-marker.css';

export default {
    title: 'Components/ObjectMarker',
    parameters: {
        description: `Object marker indicates the technical status of an object. It display the technical state like (draft, 
unsaved changes, locked, favorite, flagged). Use the object marker for this unless you want to display the status of the object in the business life cycle. 
The technical status can be represented as an icon, with an icon and text, or as text only, depending on the screen size. `
    },
    tags: ['f3', 'a11y', 'theme']
};

/**
 * Object Marker can display the semantic status of an object: (class: `fd-object-marker`)
 */

export const iconOnly = () => `
<span class="fd-object-marker sap-icon--request" aria-label="icon for request"></span>
<span class="fd-object-marker sap-icon--favorite" aria-label="icon for favourite"></span>
<span class="fd-object-marker sap-icon--flag" aria-label="icon for flag"></span>
<span class="fd-object-marker sap-icon--user-edit" aria-label="icon for user edit"></span>
<span class="fd-object-marker sap-icon--private" aria-label="icon for private"></span>
`;

/**
 * Object Marker Text only
 */

export const markerText = () => `
<span class="fd-object-marker">Draft</span>
<span class="fd-object-marker">Locked</span>
`;

/**
 * Object Marker icon and text
 */

export const iconAndText = () => `
<span class="fd-object-marker sap-icon--request">Request</span>
<span class="fd-object-marker sap-icon--favorite">Favourite</span>
<span class="fd-object-marker sap-icon--flag">Flag</span>
<span class="fd-object-marker sap-icon--user-edit">Draft</span>
<span class="fd-object-marker sap-icon--private">Locked</span>

<div dir="rtl">
<h4>RTL Support</h4>
<span class="fd-object-marker sap-icon--request">Request</span>
<span class="fd-object-marker sap-icon--favorite">Favourite</span>
<span class="fd-object-marker sap-icon--flag">Flag</span>
<span class="fd-object-marker sap-icon--user-edit">Draft</span>
<span class="fd-object-marker sap-icon--private">Locked</span>
</div>
`;
iconAndText.parameters = {
    docs: {
        iframeHeight: 150
    }
};

/**
 If the object marker is used as a link, a hover effect is shown on non-touch devices.
 If the object marker is shown using a combination of icon and text, there is no hover effect for the icon.
 If Object marker has to be clicked/tabbed by the user add the `fd-object-marker--link` modifier class.
 */

export const clickableObjectMarker = () => `
<span class="fd-object-marker fd-object-marker--link sap-icon--private">Locked</span>
<span class="fd-object-marker fd-object-marker--link sap-icon--user-edit">Unsaved Changes</span>

<div dir="rtl">
<h4>RTL Support</h4>
<span class="fd-object-marker fd-object-marker--link sap-icon--private">Locked</span>
<span class="fd-object-marker fd-object-marker--link sap-icon--user-edit">Unsaved Changes</span>
</div>
`;
clickableObjectMarker.parameters = {
    docs: {
        iframeHeight: 150
    }
};

export const ObjectMarkerWithTwoIcon = () => `
<div>
<span class="fd-object-marker sap-icon--favorite" aria-label="icon to mark favourite"></span>
<span class="fd-object-marker sap-icon--private">Locked</span>
</div>
<br>
<div>
<span class="fd-object-marker sap-icon--favorite" aria-label="icon to mark favourite"></span>
<span class="fd-object-marker sap-icon--private" aria-label="icon to mark private"></span>
</div>
<div dir="rtl">
<h4>RTL Support</h4>
<div>
<span class="fd-object-marker sap-icon--favorite" aria-label="icon for favourite"></span>
<span class="fd-object-marker sap-icon--private">Locked</span>
</div>
<br>
<div>
<span class="fd-object-marker sap-icon--favorite" aria-label="icon to mark favourite"></span>
<span class="fd-object-marker sap-icon--private" aria-label="icon to mark private"></span>
</div>
</div>
`;
ObjectMarkerWithTwoIcon.parameters = {
    docs: {
        iframeHeight: 200
    }
};
