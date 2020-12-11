import { ExpenseTypesRequestBuilder } from './ExpenseTypesRequestBuilder';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, EnumField, Field, OneToOneLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ExpenseTypes" of service "SAPB1".
 */
export declare class ExpenseTypes extends EntityV4 implements ExpenseTypesType {
    /**
     * Technical entity name for ExpenseTypes.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Expense Type.
     * @nullable
     */
    expenseType?: string;
    /**
     * Expense Name.
     * @nullable
     */
    expenseName?: string;
    /**
     * Expense Account.
     * @nullable
     */
    expenseAccount?: string;
    /**
     * Paid By Company.
     * @nullable
     */
    paidByCompany?: BoYesNoEnum;
    /**
     * Vat Group.
     * @nullable
     */
    vatGroup?: string;
    /**
     * One-to-one navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccount: ChartOfAccounts;
    /**
     * One-to-one navigation property to the [[SalesTaxCodes]] entity.
     */
    salesTaxCode: SalesTaxCodes;
    /**
     * Returns an entity builder to construct instances of `ExpenseTypes`.
     * @returns A builder that constructs instances of entity type `ExpenseTypes`.
     */
    static builder(): EntityBuilderType<ExpenseTypes, ExpenseTypesType>;
    /**
     * Returns a request builder to construct requests for operations on the `ExpenseTypes` entity type.
     * @returns A `ExpenseTypes` request builder.
     */
    static requestBuilder(): ExpenseTypesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExpenseTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExpenseTypes`.
     */
    static customField(fieldName: string): CustomFieldV4<ExpenseTypes>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { SalesTaxCodes, SalesTaxCodesType } from './SalesTaxCodes';
export interface ExpenseTypesType {
    expenseType?: string | null;
    expenseName?: string | null;
    expenseAccount?: string | null;
    paidByCompany?: BoYesNoEnum | null;
    vatGroup?: string | null;
    chartOfAccount: ChartOfAccountsType;
    salesTaxCode: SalesTaxCodesType;
}
export declare namespace ExpenseTypes {
    /**
     * Static representation of the [[expenseType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPENSE_TYPE: StringField<ExpenseTypes>;
    /**
     * Static representation of the [[expenseName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPENSE_NAME: StringField<ExpenseTypes>;
    /**
     * Static representation of the [[expenseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXPENSE_ACCOUNT: StringField<ExpenseTypes>;
    /**
     * Static representation of the [[paidByCompany]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAID_BY_COMPANY: EnumField<ExpenseTypes>;
    /**
     * Static representation of the [[vatGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VAT_GROUP: StringField<ExpenseTypes>;
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNT: OneToOneLink<ExpenseTypes, ChartOfAccounts>;
    /**
     * Static representation of the one-to-one navigation property [[salesTaxCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALES_TAX_CODE: OneToOneLink<ExpenseTypes, SalesTaxCodes>;
    /**
     * All fields of the ExpenseTypes entity.
     */
    const _allFields: Array<StringField<ExpenseTypes> | EnumField<ExpenseTypes> | OneToOneLink<ExpenseTypes, ChartOfAccounts> | OneToOneLink<ExpenseTypes, SalesTaxCodes>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ExpenseTypes>;
    /**
     * All key fields of the ExpenseTypes entity.
     */
    const _keyFields: Array<Field<ExpenseTypes>>;
    /**
     * Mapping of all key field names to the respective static field property ExpenseTypes.
     */
    const _keys: {
        [keys: string]: Field<ExpenseTypes>;
    };
}
//# sourceMappingURL=ExpenseTypes.d.ts.map