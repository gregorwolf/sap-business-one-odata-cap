import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PmcActivityData
 */
export interface PmcActivityData {
    /**
     * Activity Id.
     * @nullable
     */
    activityId?: number;
    /**
     * Activity Type.
     * @nullable
     */
    activityType?: string;
    /**
     * Labor Item.
     * @nullable
     */
    laborItem?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[PmcActivityData.build]] instead.
 */
export declare function createPmcActivityData(json: any): PmcActivityData;
/**
 * PmcActivityDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmcActivityDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PmcActivityData.activityId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    activityId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmcActivityData.activityType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    activityType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmcActivityData.laborItem]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    laborItem: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace PmcActivityData {
    function build(json: {
        [keys: string]: FieldType;
    }): PmcActivityData;
}
//# sourceMappingURL=PmcActivityData.d.ts.map