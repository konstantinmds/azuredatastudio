/**
 * Dusky API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1ContainerStatus } from './v1ContainerStatus';
import { V1PodCondition } from './v1PodCondition';
import { V1PodIP } from './v1PodIP';

export class V1PodStatus {
    'conditions'?: Array<V1PodCondition>;
    'containerStatuses'?: Array<V1ContainerStatus>;
    'ephemeralContainerStatuses'?: Array<V1ContainerStatus>;
    'hostIP'?: string;
    'initContainerStatuses'?: Array<V1ContainerStatus>;
    'message'?: string;
    'nominatedNodeName'?: string;
    'phase'?: string;
    'podIP'?: string;
    'podIPs'?: Array<V1PodIP>;
    'qosClass'?: string;
    'reason'?: string;
    'startTime'?: Date | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1PodCondition>"
        },
        {
            "name": "containerStatuses",
            "baseName": "containerStatuses",
            "type": "Array<V1ContainerStatus>"
        },
        {
            "name": "ephemeralContainerStatuses",
            "baseName": "ephemeralContainerStatuses",
            "type": "Array<V1ContainerStatus>"
        },
        {
            "name": "hostIP",
            "baseName": "hostIP",
            "type": "string"
        },
        {
            "name": "initContainerStatuses",
            "baseName": "initContainerStatuses",
            "type": "Array<V1ContainerStatus>"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "nominatedNodeName",
            "baseName": "nominatedNodeName",
            "type": "string"
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "string"
        },
        {
            "name": "podIP",
            "baseName": "podIP",
            "type": "string"
        },
        {
            "name": "podIPs",
            "baseName": "podIPs",
            "type": "Array<V1PodIP>"
        },
        {
            "name": "qosClass",
            "baseName": "qosClass",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "string"
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return V1PodStatus.attributeTypeMap;
    }
}
