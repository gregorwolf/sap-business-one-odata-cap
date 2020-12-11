import { AccrualTypesRequestBuilder } from './AccrualTypesRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "AccrualTypes" of service "SAPB1".
 */
export declare class AccrualTypes extends EntityV4 implements AccrualTypesType {
    /**
     * Technical entity name for AccrualTypes.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Posting Account.
     * @nullable
     */
    postingAccount?: string;
    /**
     * Calculation Account.
     * @nullable
     */
    calculationAccount?: string;
    /**
     * Interim Account.
     * @nullable
     */
    interimAccount?: string;
    /**
     * One-to-one navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccount: ChartOfAccounts;
    /**
     * Returns an entity builder to construct instances of `AccrualTypes`.
     * @returns A builder that constructs instances of entity type `AccrualTypes`.
     */
    static builder(): EntityBuilderType<AccrualTypes, AccrualTypesType>;
    /**
     * Returns a request builder to construct requests for operations on the `AccrualTypes` entity type.
     * @returns A `AccrualTypes` request builder.
     */
    static requestBuilder(): AccrualTypesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AccrualTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AccrualTypes`.
     */
    static customField(fieldName: string): CustomFieldV4<AccrualTypes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
export interface AccrualTypesType {
    code?: string | null;
    name?: string | null;
    postingAccount?: string | null;
    calculationAccount?: string | null;
    interimAccount?: string | null;
    chartOfAccount: ChartOfAccountsType;
}
export declare namespace AccrualTypes {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<AccrualTypes>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<AccrualTypes>;
    /**
     * Static representation of the [[postingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTING_ACCOUNT: StringField<AccrualTypes>;
    /**
     * Static representation of the [[calculationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CALCULATION_ACCOUNT: StringField<AccrualTypes>;
    /**
     * Static representation of the [[interimAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERIM_ACCOUNT: StringField<AccrualTypes>;
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNT: OneToOneLink<AccrualTypes, ChartOfAccounts>;
    /**
     * All fields of the AccrualTypes entity.
     */
    const _allFields: Array<StringField<AccrualTypes> | OneToOneLink<AccrualTypes, ChartOfAccounts>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AccrualTypes>;
    /**
     * All key fields of the AccrualTypes entity.
     */
    const _keyFields: Array<Field<AccrualTypes>>;
    /**
     * Mapping of all key field names to the respective static field property AccrualTypes.
     */
    const _keys: {
        [keys: string]: Field<AccrualTypes>;
    };
}
//# sourceMappingURL=AccrualTypes.d.ts.map