import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * DnfCodeSetupParams
 */
export interface DnfCodeSetupParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Ncm Code.
     * @nullable
     */
    ncmCode?: number;
    /**
     * Dnf Code.
     * @nullable
     */
    dnfCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[DnfCodeSetupParams.build]] instead.
 */
export declare function createDnfCodeSetupParams(json: any): DnfCodeSetupParams;
/**
 * DnfCodeSetupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class DnfCodeSetupParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, DnfCodeSetupParams> {
    /**
     * Representation of the [[DnfCodeSetupParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DnfCodeSetupParams.ncmCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ncmCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[DnfCodeSetupParams.dnfCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dnfCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of DnfCodeSetupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace DnfCodeSetupParams {
    /**
     * Metadata information on all properties of the `DnfCodeSetupParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<DnfCodeSetupParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): DnfCodeSetupParams;
}
//# sourceMappingURL=DnfCodeSetupParams.d.ts.map