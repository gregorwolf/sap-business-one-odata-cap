import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PmSubprojectParams
 */
export interface PmSubprojectParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Is Subproject.
     * @nullable
     */
    isSubproject?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[PmSubprojectParams.build]] instead.
 */
export declare function createPmSubprojectParams(json: any): PmSubprojectParams;
/**
 * PmSubprojectParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmSubprojectParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmSubprojectParams> {
    /**
     * Representation of the [[PmSubprojectParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmSubprojectParams.isSubproject]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isSubproject: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of PmSubprojectParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmSubprojectParams {
    /**
     * Metadata information on all properties of the `PmSubprojectParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmSubprojectParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PmSubprojectParams;
}
//# sourceMappingURL=PmSubprojectParams.d.ts.map