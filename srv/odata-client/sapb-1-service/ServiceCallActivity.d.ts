import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ServiceCallActivity
 */
export interface ServiceCallActivity {
    /**
     * Line Num.
     * @nullable
     */
    lineNum?: number;
    /**
     * Activity Code.
     * @nullable
     */
    activityCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallActivity.build]] instead.
 */
export declare function createServiceCallActivity(json: any): ServiceCallActivity;
/**
 * ServiceCallActivityField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceCallActivityField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ServiceCallActivity.lineNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallActivity.activityCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    activityCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ServiceCallActivity {
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceCallActivity;
}
//# sourceMappingURL=ServiceCallActivity.d.ts.map