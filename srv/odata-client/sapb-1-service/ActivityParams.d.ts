import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ActivityParams
 */
export interface ActivityParams {
    /**
     * Activity Code.
     * @nullable
     */
    activityCode?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ActivityParams.build]] instead.
 */
export declare function createActivityParams(json: any): ActivityParams;
/**
 * ActivityParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ActivityParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ActivityParams.activityCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    activityCode: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace ActivityParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ActivityParams;
}
//# sourceMappingURL=ActivityParams.d.ts.map