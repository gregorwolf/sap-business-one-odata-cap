import { FiscalPrinterRequestBuilder } from './FiscalPrinterRequestBuilder';
import { FiscalPrinterParams } from './FiscalPrinterParams';
import { AllFields, CollectionField, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FiscalPrinter" of service "SAPB1".
 */
export declare class FiscalPrinter extends EntityV4 implements FiscalPrinterType {
    /**
     * Technical entity name for FiscalPrinter.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Equipment No.
     * @nullable
     */
    equipmentNo?: string;
    /**
     * Model.
     * @nullable
     */
    model?: string;
    /**
     * Manufacturer Serial N.
     * @nullable
     */
    manufacturerSerialN?: string;
    /**
     * Register No.
     * @nullable
     */
    registerNo?: number;
    /**
     * Fiscal Document Model.
     * @nullable
     */
    fiscalDocumentModel?: string;
    /**
     * Fiscal Printers Params.
     * @nullable
     */
    fiscalPrintersParams?: FiscalPrinterParams[];
    /**
     * One-to-one navigation property to the [[NfModels]] entity.
     */
    nfModel: NfModels;
    /**
     * One-to-many navigation property to the [[PosDailySummary]] entity.
     */
    posDailySummary: PosDailySummary[];
    /**
     * Returns an entity builder to construct instances of `FiscalPrinter`.
     * @returns A builder that constructs instances of entity type `FiscalPrinter`.
     */
    static builder(): EntityBuilderType<FiscalPrinter, FiscalPrinterType>;
    /**
     * Returns a request builder to construct requests for operations on the `FiscalPrinter` entity type.
     * @returns A `FiscalPrinter` request builder.
     */
    static requestBuilder(): FiscalPrinterRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FiscalPrinter`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FiscalPrinter`.
     */
    static customField(fieldName: string): CustomFieldV4<FiscalPrinter>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { NfModels, NfModelsType } from './NfModels';
import { PosDailySummary, PosDailySummaryType } from './PosDailySummary';
export interface FiscalPrinterType {
    equipmentNo?: string | null;
    model?: string | null;
    manufacturerSerialN?: string | null;
    registerNo?: number | null;
    fiscalDocumentModel?: string | null;
    fiscalPrintersParams?: FiscalPrinterParams[] | null;
    nfModel: NfModelsType;
    posDailySummary: PosDailySummaryType[];
}
export declare namespace FiscalPrinter {
    /**
     * Static representation of the [[equipmentNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EQUIPMENT_NO: StringField<FiscalPrinter>;
    /**
     * Static representation of the [[model]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODEL: StringField<FiscalPrinter>;
    /**
     * Static representation of the [[manufacturerSerialN]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANUFACTURER_SERIAL_N: StringField<FiscalPrinter>;
    /**
     * Static representation of the [[registerNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REGISTER_NO: NumberField<FiscalPrinter>;
    /**
     * Static representation of the [[fiscalDocumentModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FISCAL_DOCUMENT_MODEL: StringField<FiscalPrinter>;
    /**
     * Static representation of the [[fiscalPrintersParams]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FISCAL_PRINTERS_PARAMS: CollectionField<FiscalPrinter, FiscalPrinterParams>;
    /**
     * Static representation of the one-to-one navigation property [[nfModel]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NF_MODEL: OneToOneLink<FiscalPrinter, NfModels>;
    /**
     * Static representation of the one-to-many navigation property [[posDailySummary]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POS_DAILY_SUMMARY: OneToManyLink<FiscalPrinter, PosDailySummary>;
    /**
     * All fields of the FiscalPrinter entity.
     */
    const _allFields: Array<StringField<FiscalPrinter> | NumberField<FiscalPrinter> | CollectionField<FiscalPrinter, FiscalPrinterParams> | OneToOneLink<FiscalPrinter, NfModels> | OneToManyLink<FiscalPrinter, PosDailySummary>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FiscalPrinter>;
    /**
     * All key fields of the FiscalPrinter entity.
     */
    const _keyFields: Array<Field<FiscalPrinter>>;
    /**
     * Mapping of all key field names to the respective static field property FiscalPrinter.
     */
    const _keys: {
        [keys: string]: Field<FiscalPrinter>;
    };
}
//# sourceMappingURL=FiscalPrinter.d.ts.map