import { ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PmsActivityData
 */
export interface PmsActivityData {
    /**
     * Line Id.
     * @nullable
     */
    lineId?: number;
    /**
     * Stage Id.
     * @nullable
     */
    stageId?: number;
    /**
     * Activity Id.
     * @nullable
     */
    activityId?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[PmsActivityData.build]] instead.
 */
export declare function createPmsActivityData(json: any): PmsActivityData;
/**
 * PmsActivityDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmsActivityDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PmsActivityData.lineId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsActivityData.stageId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmsActivityData.activityId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    activityId: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace PmsActivityData {
    function build(json: {
        [keys: string]: FieldType;
    }): PmsActivityData;
}
//# sourceMappingURL=PmsActivityData.d.ts.map