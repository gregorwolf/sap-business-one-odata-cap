/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetDistributionsRequestBuilder } from './BudgetDistributionsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Field, NumberField, OneToManyLink, StringField } from '@sap-cloud-sdk/core/v4';

/**
 * This class represents the entity "BudgetDistributions" of service "SAPB1".
 */
export class BudgetDistributions extends Entity implements BudgetDistributionsType {
  /**
   * Technical entity name for BudgetDistributions.
   */
  static _entityName = 'BudgetDistributions';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for BudgetDistributions.
   */
  static _serviceName = 'SAPB1';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
  budgets!: Budgets[];

  /**
   * Returns an entity builder to construct instances `BudgetDistributions`.
   * @returns A builder that constructs instances of entity type `BudgetDistributions`.
   */
  static builder(): EntityBuilderType<BudgetDistributions, BudgetDistributionsTypeForceMandatory> {
    return Entity.entityBuilder(BudgetDistributions);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BudgetDistributions` entity type.
   * @returns A `BudgetDistributions` request builder.
   */
  static requestBuilder(): BudgetDistributionsRequestBuilder {
    return new BudgetDistributionsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BudgetDistributions`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BudgetDistributions`.
   */
  static customField(fieldName: string): CustomField<BudgetDistributions> {
    return Entity.customFieldSelector(fieldName, BudgetDistributions);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Budgets, BudgetsType } from './Budgets';

export interface BudgetDistributionsType {
  september?: number;
  august?: number;
  july?: number;
  june?: number;
  may?: number;
  april?: number;
  march?: number;
  february?: number;
  december?: number;
  november?: number;
  october?: number;
  january?: number;
  budgetAmount?: number;
  description?: string;
  divisionCode?: number;
  budgets: BudgetsType[];
}

export interface BudgetDistributionsTypeForceMandatory {
  september: number;
  august: number;
  july: number;
  june: number;
  may: number;
  april: number;
  march: number;
  february: number;
  december: number;
  november: number;
  october: number;
  january: number;
  budgetAmount: number;
  description: string;
  divisionCode: number;
  budgets: BudgetsType[];
}

export namespace BudgetDistributions {
  /**
   * Static representation of the [[september]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEPTEMBER: NumberField<BudgetDistributions> = new NumberField('September', BudgetDistributions, 'Edm.Double');
  /**
   * Static representation of the [[august]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUGUST: NumberField<BudgetDistributions> = new NumberField('August', BudgetDistributions, 'Edm.Double');
  /**
   * Static representation of the [[july]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JULY: NumberField<BudgetDistributions> = new NumberField('July', BudgetDistributions, 'Edm.Double');
  /**
   * Static representation of the [[june]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JUNE: NumberField<BudgetDistributions> = new NumberField('June', BudgetDistributions, 'Edm.Double');
  /**
   * Static representation of the [[may]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAY: NumberField<BudgetDistributions> = new NumberField('May', BudgetDistributions, 'Edm.Double');
  /**
   * Static representation of the [[april]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APRIL: NumberField<BudgetDistributions> = new NumberField('April', BudgetDistributions, 'Edm.Double');
  /**
   * Static representation of the [[march]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MARCH: NumberField<BudgetDistributions> = new NumberField('March', BudgetDistributions, 'Edm.Double');
  /**
   * Static representation of the [[february]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FEBRUARY: NumberField<BudgetDistributions> = new NumberField('February', BudgetDistributions, 'Edm.Double');
  /**
   * Static representation of the [[december]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DECEMBER: NumberField<BudgetDistributions> = new NumberField('December', BudgetDistributions, 'Edm.Double');
  /**
   * Static representation of the [[november]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOVEMBER: NumberField<BudgetDistributions> = new NumberField('November', BudgetDistributions, 'Edm.Double');
  /**
   * Static representation of the [[october]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OCTOBER: NumberField<BudgetDistributions> = new NumberField('October', BudgetDistributions, 'Edm.Double');
  /**
   * Static representation of the [[january]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JANUARY: NumberField<BudgetDistributions> = new NumberField('January', BudgetDistributions, 'Edm.Double');
  /**
   * Static representation of the [[budgetAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUDGET_AMOUNT: NumberField<BudgetDistributions> = new NumberField('BudgetAmount', BudgetDistributions, 'Edm.Double');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<BudgetDistributions> = new StringField('Description', BudgetDistributions, 'Edm.String');
  /**
   * Static representation of the [[divisionCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION_CODE: NumberField<BudgetDistributions> = new NumberField('DivisionCode', BudgetDistributions, 'Edm.Int32');
  /**
   * Static representation of the one-to-many navigation property [[budgets]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUDGETS: OneToManyLink<BudgetDistributions, Budgets> = new OneToManyLink('Budgets', BudgetDistributions, Budgets);
  /**
   * All fields of the BudgetDistributions entity.
   */
  export const _allFields: Array<NumberField<BudgetDistributions> | StringField<BudgetDistributions> | OneToManyLink<BudgetDistributions, Budgets>> = [
    BudgetDistributions.SEPTEMBER,
    BudgetDistributions.AUGUST,
    BudgetDistributions.JULY,
    BudgetDistributions.JUNE,
    BudgetDistributions.MAY,
    BudgetDistributions.APRIL,
    BudgetDistributions.MARCH,
    BudgetDistributions.FEBRUARY,
    BudgetDistributions.DECEMBER,
    BudgetDistributions.NOVEMBER,
    BudgetDistributions.OCTOBER,
    BudgetDistributions.JANUARY,
    BudgetDistributions.BUDGET_AMOUNT,
    BudgetDistributions.DESCRIPTION,
    BudgetDistributions.DIVISION_CODE,
    BudgetDistributions.BUDGETS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BudgetDistributions> = new AllFields('*', BudgetDistributions);
  /**
   * All key fields of the BudgetDistributions entity.
   */
  export const _keyFields: Array<Field<BudgetDistributions>> = [BudgetDistributions.DIVISION_CODE];
  /**
   * Mapping of all key field names to the respective static field property BudgetDistributions.
   */
  export const _keys: { [keys: string]: Field<BudgetDistributions> } = BudgetDistributions._keyFields.reduce((acc: { [keys: string]: Field<BudgetDistributions> }, field: Field<BudgetDistributions>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
