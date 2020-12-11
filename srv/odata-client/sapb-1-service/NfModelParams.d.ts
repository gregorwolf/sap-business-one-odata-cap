import { ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * NfModelParams
 */
export interface NfModelParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: string;
    /**
     * Nfm Name.
     * @nullable
     */
    nfmName?: string;
    /**
     * Nfm Description.
     * @nullable
     */
    nfmDescription?: string;
    /**
     * Nfm Code.
     * @nullable
     */
    nfmCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[NfModelParams.build]] instead.
 */
export declare function createNfModelParams(json: any): NfModelParams;
/**
 * NfModelParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class NfModelParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, NfModelParams> {
    /**
     * Representation of the [[NfModelParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[NfModelParams.nfmName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    nfmName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[NfModelParams.nfmDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    nfmDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[NfModelParams.nfmCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    nfmCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Creates an instance of NfModelParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace NfModelParams {
    /**
     * Metadata information on all properties of the `NfModelParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<NfModelParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): NfModelParams;
}
//# sourceMappingURL=NfModelParams.d.ts.map