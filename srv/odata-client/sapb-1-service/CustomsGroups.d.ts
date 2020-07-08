import { CustomsGroupsRequestBuilder } from './CustomsGroupsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, OneToOneLink, StringField } from '@sap-cloud-sdk/core/v4';
/**
 * This class represents the entity "CustomsGroups" of service "SAPB1".
 */
export declare class CustomsGroups extends Entity implements CustomsGroupsType {
    /**
     * Technical entity name for CustomsGroups.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CustomsGroups.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Code.
     * @nullable
     */
    code?: number;
    /**
     * Name.
     * @nullable
     */
    name?: string;
    /**
     * Number.
     * @nullable
     */
    number?: string;
    /**
     * Customs.
     * @nullable
     */
    customs?: number;
    /**
     * Purchase.
     * @nullable
     */
    purchase?: number;
    /**
     * Other.
     * @nullable
     */
    other?: number;
    /**
     * Total.
     * @nullable
     */
    total?: number;
    /**
     * Customs Allocation Account.
     * @nullable
     */
    customsAllocationAccount?: string;
    /**
     * Customs Expense Account.
     * @nullable
     */
    customsExpenseAccount?: string;
    /**
     * Port Address.
     * @nullable
     */
    portAddress?: string;
    /**
     * Port State.
     * @nullable
     */
    portState?: string;
    /**
     * One-to-one navigation property to the [[ChartOfAccounts]] entity.
     */
    chartOfAccount: ChartOfAccounts;
    /**
     * One-to-many navigation property to the [[Items]] entity.
     */
    items: Items[];
    /**
     * Returns an entity builder to construct instances `CustomsGroups`.
     * @returns A builder that constructs instances of entity type `CustomsGroups`.
     */
    static builder(): EntityBuilderType<CustomsGroups, CustomsGroupsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CustomsGroups` entity type.
     * @returns A `CustomsGroups` request builder.
     */
    static requestBuilder(): CustomsGroupsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomsGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomsGroups`.
     */
    static customField(fieldName: string): CustomField<CustomsGroups>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { ChartOfAccounts, ChartOfAccountsType } from './ChartOfAccounts';
import { Items, ItemsType } from './Items';
export interface CustomsGroupsType {
    code?: number;
    name?: string;
    number?: string;
    customs?: number;
    purchase?: number;
    other?: number;
    total?: number;
    customsAllocationAccount?: string;
    customsExpenseAccount?: string;
    portAddress?: string;
    portState?: string;
    chartOfAccount: ChartOfAccountsType;
    items: ItemsType[];
}
export interface CustomsGroupsTypeForceMandatory {
    code: number;
    name: string;
    number: string;
    customs: number;
    purchase: number;
    other: number;
    total: number;
    customsAllocationAccount: string;
    customsExpenseAccount: string;
    portAddress: string;
    portState: string;
    chartOfAccount: ChartOfAccountsType;
    items: ItemsType[];
}
export declare namespace CustomsGroups {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: NumberField<CustomsGroups>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<CustomsGroups>;
    /**
     * Static representation of the [[number]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NUMBER: StringField<CustomsGroups>;
    /**
     * Static representation of the [[customs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMS: NumberField<CustomsGroups>;
    /**
     * Static representation of the [[purchase]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PURCHASE: NumberField<CustomsGroups>;
    /**
     * Static representation of the [[other]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OTHER: NumberField<CustomsGroups>;
    /**
     * Static representation of the [[total]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL: NumberField<CustomsGroups>;
    /**
     * Static representation of the [[customsAllocationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMS_ALLOCATION_ACCOUNT: StringField<CustomsGroups>;
    /**
     * Static representation of the [[customsExpenseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOMS_EXPENSE_ACCOUNT: StringField<CustomsGroups>;
    /**
     * Static representation of the [[portAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PORT_ADDRESS: StringField<CustomsGroups>;
    /**
     * Static representation of the [[portState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PORT_STATE: StringField<CustomsGroups>;
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHART_OF_ACCOUNT: OneToOneLink<CustomsGroups, ChartOfAccounts>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: OneToManyLink<CustomsGroups, Items>;
    /**
     * All fields of the CustomsGroups entity.
     */
    const _allFields: Array<NumberField<CustomsGroups> | StringField<CustomsGroups> | OneToOneLink<CustomsGroups, ChartOfAccounts> | OneToManyLink<CustomsGroups, Items>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CustomsGroups>;
    /**
     * All key fields of the CustomsGroups entity.
     */
    const _keyFields: Array<Field<CustomsGroups>>;
    /**
     * Mapping of all key field names to the respective static field property CustomsGroups.
     */
    const _keys: {
        [keys: string]: Field<CustomsGroups>;
    };
}
//# sourceMappingURL=CustomsGroups.d.ts.map