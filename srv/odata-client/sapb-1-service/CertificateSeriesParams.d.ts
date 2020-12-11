import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CertificateSeriesParams
 */
export interface CertificateSeriesParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Section.
     * @nullable
     */
    section?: number;
    /**
     * Location.
     * @nullable
     */
    location?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[CertificateSeriesParams.build]] instead.
 */
export declare function createCertificateSeriesParams(json: any): CertificateSeriesParams;
/**
 * CertificateSeriesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CertificateSeriesParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CertificateSeriesParams> {
    /**
     * Representation of the [[CertificateSeriesParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CertificateSeriesParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CertificateSeriesParams.section]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    section: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CertificateSeriesParams.location]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    location: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of CertificateSeriesParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CertificateSeriesParams {
    /**
     * Metadata information on all properties of the `CertificateSeriesParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CertificateSeriesParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CertificateSeriesParams;
}
//# sourceMappingURL=CertificateSeriesParams.d.ts.map