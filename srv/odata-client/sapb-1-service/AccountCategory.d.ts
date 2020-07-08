import { AccountCategoryRequestBuilder } from './AccountCategoryRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "AccountCategory" of service "SAPB1".
 */
export declare class AccountCategory extends Entity implements AccountCategoryType {
    /**
     * Technical entity name for AccountCategory.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AccountCategory.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Category Code.
     * @nullable
     */
    categoryCode?: number;
    /**
     * Category Name.
     * @nullable
     */
    categoryName?: string;
    /**
     * One-to-many navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccounts: ChartOfAccounts[];
    /**
     * Returns an entity builder to construct instances `AccountCategory`.
     * @returns A builder that constructs instances of entity type `AccountCategory`.
     */
    static builder(): EntityBuilderType<AccountCategory, AccountCategoryTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `AccountCategory` entity type.
     * @returns A `AccountCategory` request builder.
     */
    static requestBuilder(): AccountCategoryRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AccountCategory`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AccountCategory`.
     */
    static customField(fieldName: string): CustomField<AccountCategory>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
export interface AccountCategoryType {
    categoryCode?: number;
    categoryName?: string;
    chartOfAccounts: ChartOfAccountsType[];
}
export interface AccountCategoryTypeForceMandatory {
    categoryCode: number;
    categoryName: string;
    chartOfAccounts: ChartOfAccountsType[];
}
export declare namespace AccountCategory {
    /**
     * Static representation of the [[categoryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_CODE: NumberField<AccountCategory>;
    /**
     * Static representation of the [[categoryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_NAME: StringField<AccountCategory>;
    /**
     * Static representation of the one-to-many navigation property [[chartOfAccounts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNTS: OneToManyLink<AccountCategory, ChartOfAccounts>;
    /**
     * All fields of the AccountCategory entity.
     */
    const _allFields: Array<NumberField<AccountCategory> | StringField<AccountCategory> | OneToManyLink<AccountCategory, ChartOfAccounts>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<AccountCategory>;
    /**
     * All key fields of the AccountCategory entity.
     */
    const _keyFields: Array<Field<AccountCategory>>;
    /**
     * Mapping of all key field names to the respective static field property AccountCategory.
     */
    const _keys: {
        [keys: string]: Field<AccountCategory>;
    };
}
//# sourceMappingURL=AccountCategory.d.ts.map