import { BudgetDistributionsRequestBuilder } from './BudgetDistributionsRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "BudgetDistributions" of service "SAPB1".
 */
export declare class BudgetDistributions extends EntityV4 implements BudgetDistributionsType {
    /**
     * Technical entity name for BudgetDistributions.
     */
    static _entityName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * September.
     * @nullable
     */
    september?: number;
    /**
     * August.
     * @nullable
     */
    august?: number;
    /**
     * July.
     * @nullable
     */
    july?: number;
    /**
     * June.
     * @nullable
     */
    june?: number;
    /**
     * May.
     * @nullable
     */
    may?: number;
    /**
     * April.
     * @nullable
     */
    april?: number;
    /**
     * March.
     * @nullable
     */
    march?: number;
    /**
     * February.
     * @nullable
     */
    february?: number;
    /**
     * December.
     * @nullable
     */
    december?: number;
    /**
     * November.
     * @nullable
     */
    november?: number;
    /**
     * October.
     * @nullable
     */
    october?: number;
    /**
     * January.
     * @nullable
     */
    january?: number;
    /**
     * Budget Amount.
     * @nullable
     */
    budgetAmount?: number;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Division Code.
     * @nullable
     */
    divisionCode?: number;
    /**
     * One-to-many navigation property to the [[Budgets]] entity.
     */
    budgets: Budgets[];
    /**
     * Returns an entity builder to construct instances of `BudgetDistributions`.
     * @returns A builder that constructs instances of entity type `BudgetDistributions`.
     */
    static builder(): EntityBuilderType<BudgetDistributions, BudgetDistributionsType>;
    /**
     * Returns a request builder to construct requests for operations on the `BudgetDistributions` entity type.
     * @returns A `BudgetDistributions` request builder.
     */
    static requestBuilder(): BudgetDistributionsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BudgetDistributions`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BudgetDistributions`.
     */
    static customField(fieldName: string): CustomFieldV4<BudgetDistributions>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Budgets, BudgetsType } from './Budgets';
export interface BudgetDistributionsType {
    september?: number | null;
    august?: number | null;
    july?: number | null;
    june?: number | null;
    may?: number | null;
    april?: number | null;
    march?: number | null;
    february?: number | null;
    december?: number | null;
    november?: number | null;
    october?: number | null;
    january?: number | null;
    budgetAmount?: number | null;
    description?: string | null;
    divisionCode?: number | null;
    budgets: BudgetsType[];
}
export declare namespace BudgetDistributions {
    /**
     * Static representation of the [[september]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEPTEMBER: NumberField<BudgetDistributions>;
    /**
     * Static representation of the [[august]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUGUST: NumberField<BudgetDistributions>;
    /**
     * Static representation of the [[july]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JULY: NumberField<BudgetDistributions>;
    /**
     * Static representation of the [[june]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JUNE: NumberField<BudgetDistributions>;
    /**
     * Static representation of the [[may]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAY: NumberField<BudgetDistributions>;
    /**
     * Static representation of the [[april]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APRIL: NumberField<BudgetDistributions>;
    /**
     * Static representation of the [[march]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MARCH: NumberField<BudgetDistributions>;
    /**
     * Static representation of the [[february]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEBRUARY: NumberField<BudgetDistributions>;
    /**
     * Static representation of the [[december]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DECEMBER: NumberField<BudgetDistributions>;
    /**
     * Static representation of the [[november]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOVEMBER: NumberField<BudgetDistributions>;
    /**
     * Static representation of the [[october]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OCTOBER: NumberField<BudgetDistributions>;
    /**
     * Static representation of the [[january]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JANUARY: NumberField<BudgetDistributions>;
    /**
     * Static representation of the [[budgetAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUDGET_AMOUNT: NumberField<BudgetDistributions>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<BudgetDistributions>;
    /**
     * Static representation of the [[divisionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION_CODE: NumberField<BudgetDistributions>;
    /**
     * Static representation of the one-to-many navigation property [[budgets]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUDGETS: OneToManyLink<BudgetDistributions, Budgets>;
    /**
     * All fields of the BudgetDistributions entity.
     */
    const _allFields: Array<NumberField<BudgetDistributions> | StringField<BudgetDistributions> | OneToManyLink<BudgetDistributions, Budgets>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<BudgetDistributions>;
    /**
     * All key fields of the BudgetDistributions entity.
     */
    const _keyFields: Array<Field<BudgetDistributions>>;
    /**
     * Mapping of all key field names to the respective static field property BudgetDistributions.
     */
    const _keys: {
        [keys: string]: Field<BudgetDistributions>;
    };
}
//# sourceMappingURL=BudgetDistributions.d.ts.map