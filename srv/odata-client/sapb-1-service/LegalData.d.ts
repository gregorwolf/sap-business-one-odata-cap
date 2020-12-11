import { LegalDataRequestBuilder } from './LegalDataRequestBuilder';
import { Moment } from 'moment';
import { LegalDataDetail } from './LegalDataDetail';
import { BoAparDocumentTypes } from './BoAparDocumentTypes';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, OneToOneLink, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "LegalData" of service "SAPB1".
 */
export declare class LegalData extends EntityV4 implements LegalDataType {
    /**
     * Technical entity name for LegalData.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Doc Entry.
     * @nullable
     */
    docEntry?: number;
    /**
     * Source Object Type.
     * @nullable
     */
    sourceObjectType?: BoAparDocumentTypes;
    /**
     * Source Object Entry.
     * @nullable
     */
    sourceObjectEntry?: number;
    /**
     * Date Of Printing.
     * @nullable
     */
    dateOfPrinting?: Moment;
    /**
     * Time Of Printing.
     * @nullable
     */
    timeOfPrinting?: Time;
    /**
     * Printer Brand.
     * @nullable
     */
    printerBrand?: string;
    /**
     * Printer Type.
     * @nullable
     */
    printerType?: string;
    /**
     * Printer Model.
     * @nullable
     */
    printerModel?: string;
    /**
     * Printer Firmware Version.
     * @nullable
     */
    printerFirmwareVersion?: string;
    /**
     * Printer Dll Version.
     * @nullable
     */
    printerDllVersion?: string;
    /**
     * Fiscal Series.
     * @nullable
     */
    fiscalSeries?: string;
    /**
     * Fiscal Number.
     * @nullable
     */
    fiscalNumber?: string;
    /**
     * Document Number.
     * @nullable
     */
    documentNumber?: string;
    /**
     * Fiscal User Id.
     * @nullable
     */
    fiscalUserId?: number;
    /**
     * Legal Data Detail Collection.
     * @nullable
     */
    legalDataDetailCollection?: LegalDataDetail[];
    /**
     * One-to-one navigation property to the [[Users]] entity.
     */
    user: Users;
    /**
     * Returns an entity builder to construct instances of `LegalData`.
     * @returns A builder that constructs instances of entity type `LegalData`.
     */
    static builder(): EntityBuilderType<LegalData, LegalDataType>;
    /**
     * Returns a request builder to construct requests for operations on the `LegalData` entity type.
     * @returns A `LegalData` request builder.
     */
    static requestBuilder(): LegalDataRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegalData`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LegalData`.
     */
    static customField(fieldName: string): CustomFieldV4<LegalData>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Users, UsersType } from './Users';
export interface LegalDataType {
    docEntry?: number | null;
    sourceObjectType?: BoAparDocumentTypes | null;
    sourceObjectEntry?: number | null;
    dateOfPrinting?: Moment | null;
    timeOfPrinting?: Time | null;
    printerBrand?: string | null;
    printerType?: string | null;
    printerModel?: string | null;
    printerFirmwareVersion?: string | null;
    printerDllVersion?: string | null;
    fiscalSeries?: string | null;
    fiscalNumber?: string | null;
    documentNumber?: string | null;
    fiscalUserId?: number | null;
    legalDataDetailCollection?: LegalDataDetail[] | null;
    user: UsersType;
}
export declare namespace LegalData {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOC_ENTRY: NumberField<LegalData>;
    /**
     * Static representation of the [[sourceObjectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_OBJECT_TYPE: EnumField<LegalData>;
    /**
     * Static representation of the [[sourceObjectEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOURCE_OBJECT_ENTRY: NumberField<LegalData>;
    /**
     * Static representation of the [[dateOfPrinting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_OF_PRINTING: DateField<LegalData>;
    /**
     * Static representation of the [[timeOfPrinting]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_OF_PRINTING: TimeField<LegalData>;
    /**
     * Static representation of the [[printerBrand]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRINTER_BRAND: StringField<LegalData>;
    /**
     * Static representation of the [[printerType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRINTER_TYPE: StringField<LegalData>;
    /**
     * Static representation of the [[printerModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRINTER_MODEL: StringField<LegalData>;
    /**
     * Static representation of the [[printerFirmwareVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRINTER_FIRMWARE_VERSION: StringField<LegalData>;
    /**
     * Static representation of the [[printerDllVersion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRINTER_DLL_VERSION: StringField<LegalData>;
    /**
     * Static representation of the [[fiscalSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FISCAL_SERIES: StringField<LegalData>;
    /**
     * Static representation of the [[fiscalNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FISCAL_NUMBER: StringField<LegalData>;
    /**
     * Static representation of the [[documentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DOCUMENT_NUMBER: StringField<LegalData>;
    /**
     * Static representation of the [[fiscalUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FISCAL_USER_ID: NumberField<LegalData>;
    /**
     * Static representation of the [[legalDataDetailCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_DATA_DETAIL_COLLECTION: CollectionField<LegalData, LegalDataDetail>;
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER: OneToOneLink<LegalData, Users>;
    /**
     * All fields of the LegalData entity.
     */
    const _allFields: Array<NumberField<LegalData> | EnumField<LegalData> | DateField<LegalData> | TimeField<LegalData> | StringField<LegalData> | CollectionField<LegalData, LegalDataDetail> | OneToOneLink<LegalData, Users>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<LegalData>;
    /**
     * All key fields of the LegalData entity.
     */
    const _keyFields: Array<Field<LegalData>>;
    /**
     * Mapping of all key field names to the respective static field property LegalData.
     */
    const _keys: {
        [keys: string]: Field<LegalData>;
    };
}
//# sourceMappingURL=LegalData.d.ts.map