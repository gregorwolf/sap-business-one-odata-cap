import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
export declare class CertificateSeriesParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace CertificateSeriesParams {
    function build(json: {
        [keys: string]: FieldType;
    }): CertificateSeriesParams;
}
//# sourceMappingURL=CertificateSeriesParams.d.ts.map