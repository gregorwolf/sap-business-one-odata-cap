import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PmcAreaData
 */
export interface PmcAreaData {
    /**
     * Area Id.
     * @nullable
     */
    areaId?: number;
    /**
     * Area Name.
     * @nullable
     */
    areaName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[PmcAreaData.build]] instead.
 */
export declare function createPmcAreaData(json: any): PmcAreaData;
/**
 * PmcAreaDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmcAreaDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PmcAreaData.areaId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    areaId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmcAreaData.areaName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    areaName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace PmcAreaData {
    function build(json: {
        [keys: string]: FieldType;
    }): PmcAreaData;
}
//# sourceMappingURL=PmcAreaData.d.ts.map