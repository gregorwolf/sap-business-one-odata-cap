import { SectionsRequestBuilder } from './SectionsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "Sections" of service "SAPB1".
 */
export declare class Sections extends Entity implements SectionsType {
    /**
     * Technical entity name for Sections.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Sections.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * E Code.
     * @nullable
     */
    eCode?: string;
    /**
     * One-to-many navigation property to the [[CertificateSeries]] entity.
     */
    certificateSeries: CertificateSeries[];
    /**
     * One-to-many navigation property to the [[WithholdingTaxCodes]] entity.
     */
    withholdingTaxCodes: WithholdingTaxCodes[];
    /**
     * Returns an entity builder to construct instances `Sections`.
     * @returns A builder that constructs instances of entity type `Sections`.
     */
    static builder(): EntityBuilderType<Sections, SectionsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Sections` entity type.
     * @returns A `Sections` request builder.
     */
    static requestBuilder(): SectionsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sections`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sections`.
     */
    static customField(fieldName: string): CustomField<Sections>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { CertificateSeries, CertificateSeriesType } from './CertificateSeries';
import { WithholdingTaxCodes, WithholdingTaxCodesType } from './WithholdingTaxCodes';
export interface SectionsType {
    absEntry?: number;
    code?: string;
    description?: string;
    eCode?: string;
    certificateSeries: CertificateSeriesType[];
    withholdingTaxCodes: WithholdingTaxCodesType[];
}
export interface SectionsTypeForceMandatory {
    absEntry: number;
    code: string;
    description: string;
    eCode: string;
    certificateSeries: CertificateSeriesType[];
    withholdingTaxCodes: WithholdingTaxCodesType[];
}
export declare namespace Sections {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<Sections>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<Sections>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<Sections>;
    /**
     * Static representation of the [[eCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const E_CODE: StringField<Sections>;
    /**
     * Static representation of the one-to-many navigation property [[certificateSeries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CERTIFICATE_SERIES: OneToManyLink<Sections, CertificateSeries>;
    /**
     * Static representation of the one-to-many navigation property [[withholdingTaxCodes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WITHHOLDING_TAX_CODES: OneToManyLink<Sections, WithholdingTaxCodes>;
    /**
     * All fields of the Sections entity.
     */
    const _allFields: Array<NumberField<Sections> | StringField<Sections> | OneToManyLink<Sections, CertificateSeries> | OneToManyLink<Sections, WithholdingTaxCodes>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Sections>;
    /**
     * All key fields of the Sections entity.
     */
    const _keyFields: Array<Field<Sections>>;
    /**
     * Mapping of all key field names to the respective static field property Sections.
     */
    const _keys: {
        [keys: string]: Field<Sections>;
    };
}
//# sourceMappingURL=Sections.d.ts.map