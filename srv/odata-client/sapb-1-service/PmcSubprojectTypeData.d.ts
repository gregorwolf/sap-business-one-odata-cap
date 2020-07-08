import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * PmcSubprojectTypeData
 */
export interface PmcSubprojectTypeData {
    /**
     * Subproject Type Id.
     * @nullable
     */
    subprojectTypeId?: number;
    /**
     * Subproject Type Name.
     * @nullable
     */
    subprojectTypeName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[PmcSubprojectTypeData.build]] instead.
 */
export declare function createPmcSubprojectTypeData(json: any): PmcSubprojectTypeData;
/**
 * PmcSubprojectTypeDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmcSubprojectTypeDataField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[PmcSubprojectTypeData.subprojectTypeId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subprojectTypeId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmcSubprojectTypeData.subprojectTypeName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    subprojectTypeName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace PmcSubprojectTypeData {
    function build(json: {
        [keys: string]: FieldType;
    }): PmcSubprojectTypeData;
}
//# sourceMappingURL=PmcSubprojectTypeData.d.ts.map