import { FinancialYearsRequestBuilder } from './FinancialYearsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomFieldV4, DateField, EntityBuilderType, EntityV4, Field, NumberField, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FinancialYears" of service "SAPB1".
 */
export declare class FinancialYears extends EntityV4 implements FinancialYearsType {
    /**
     * Technical entity name for FinancialYears.
     */
    static _entityName: string;
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
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Assess Year.
     * @nullable
     */
    assessYear?: string;
    /**
     * Returns an entity builder to construct instances of `FinancialYears`.
     * @returns A builder that constructs instances of entity type `FinancialYears`.
     */
    static builder(): EntityBuilderType<FinancialYears, FinancialYearsType>;
    /**
     * Returns a request builder to construct requests for operations on the `FinancialYears` entity type.
     * @returns A `FinancialYears` request builder.
     */
    static requestBuilder(): FinancialYearsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FinancialYears`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FinancialYears`.
     */
    static customField(fieldName: string): CustomFieldV4<FinancialYears>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface FinancialYearsType {
    absEntry?: number | null;
    code?: string | null;
    description?: string | null;
    startDate?: Moment | null;
    endDate?: Moment | null;
    assessYear?: string | null;
}
export declare namespace FinancialYears {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ABS_ENTRY: NumberField<FinancialYears>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<FinancialYears>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<FinancialYears>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FinancialYears>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FinancialYears>;
    /**
     * Static representation of the [[assessYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSESS_YEAR: StringField<FinancialYears>;
    /**
     * All fields of the FinancialYears entity.
     */
    const _allFields: Array<NumberField<FinancialYears> | StringField<FinancialYears> | DateField<FinancialYears>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FinancialYears>;
    /**
     * All key fields of the FinancialYears entity.
     */
    const _keyFields: Array<Field<FinancialYears>>;
    /**
     * Mapping of all key field names to the respective static field property FinancialYears.
     */
    const _keys: {
        [keys: string]: Field<FinancialYears>;
    };
}
//# sourceMappingURL=FinancialYears.d.ts.map