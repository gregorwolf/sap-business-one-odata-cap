/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * BudgetCostAccountingLine
 */
export interface BudgetCostAccountingLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Distr Rule Code.
   * @nullable
   */
  distrRuleCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Dimension.
   * @nullable
   */
  dimension?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Distr Rule Debit Lc.
   * @nullable
   */
  distrRuleDebitLc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Distr Rule Debit Sc.
   * @nullable
   */
  distrRuleDebitSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Distr Rule Credit Lc.
   * @nullable
   */
  distrRuleCreditLc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Distr Rule Credit Sc.
   * @nullable
   */
  distrRuleCreditSc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * BudgetCostAccountingLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BudgetCostAccountingLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BudgetCostAccountingLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BudgetCostAccountingLine.distrRuleCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distrRuleCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DistrRuleCode', 'Edm.String', true);
  /**
   * Representation of the {@link BudgetCostAccountingLine.dimension} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dimension: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Dimension', 'Edm.Int32', true);
  /**
   * Representation of the {@link BudgetCostAccountingLine.distrRuleDebitLc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distrRuleDebitLc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistrRuleDebitLC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BudgetCostAccountingLine.distrRuleDebitSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distrRuleDebitSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistrRuleDebitSC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BudgetCostAccountingLine.distrRuleCreditLc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distrRuleCreditLc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistrRuleCreditLC',
    'Edm.Double',
    true
  );
  /**
   * Representation of the {@link BudgetCostAccountingLine.distrRuleCreditSc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distrRuleCreditSc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistrRuleCreditSC',
    'Edm.Double',
    true
  );

  /**
   * Creates an instance of BudgetCostAccountingLineField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      BudgetCostAccountingLine,
      fieldOptions
    );
  }
}

export namespace BudgetCostAccountingLine {
  /**
   * Metadata information on all properties of the `BudgetCostAccountingLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BudgetCostAccountingLine>[] =
    [
      {
        originalName: 'DistrRuleCode',
        name: 'distrRuleCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Dimension',
        name: 'dimension',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'DistrRuleDebitLC',
        name: 'distrRuleDebitLc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'DistrRuleDebitSC',
        name: 'distrRuleDebitSc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'DistrRuleCreditLC',
        name: 'distrRuleCreditLc',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'DistrRuleCreditSC',
        name: 'distrRuleCreditSc',
        type: 'Edm.Double',
        isCollection: false
      }
    ];
}
