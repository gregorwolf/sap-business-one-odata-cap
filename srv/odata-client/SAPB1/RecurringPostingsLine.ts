/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoTaxPostingAccountTypeEnum } from './BoTaxPostingAccountTypeEnum';
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
 * RecurringPostingsLine
 */
export interface RecurringPostingsLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Rcr Code.
   * @nullable
   */
  rcrCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Line Number.
   * @nullable
   */
  lineNumber?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Control Account.
   * @nullable
   */
  controlAccount?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Account Code.
   * @nullable
   */
  accountCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Account Name.
   * @nullable
   */
  accountName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Debit.
   * @nullable
   */
  debit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Credit.
   * @nullable
   */
  credit?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Currency.
   * @nullable
   */
  currency?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Group.
   * @nullable
   */
  taxGroup?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Vat Line.
   * @nullable
   */
  vatLine?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Posting Account.
   * @nullable
   */
  taxPostingAccount?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Tax Code.
   * @nullable
   */
  taxCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Costing Code 1.
   * @nullable
   */
  costingCode1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Costing Code 2.
   * @nullable
   */
  costingCode2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Costing Code 3.
   * @nullable
   */
  costingCode3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Costing Code 4.
   * @nullable
   */
  costingCode4?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Costing Code 5.
   * @nullable
   */
  costingCode5?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * W Tax Liable.
   * @nullable
   */
  wTaxLiable?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * W Tax Line.
   * @nullable
   */
  wTaxLine?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cost Element Code.
   * @nullable
   */
  costElementCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * RecurringPostingsLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class RecurringPostingsLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  RecurringPostingsLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link RecurringPostingsLine.rcrCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rcrCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('RcrCode', 'Edm.String', true);
  /**
   * Representation of the {@link RecurringPostingsLine.lineNumber} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNumber: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNumber', 'Edm.Int32', true);
  /**
   * Representation of the {@link RecurringPostingsLine.controlAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  controlAccount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'ControlAccount',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link RecurringPostingsLine.accountCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AccountCode', 'Edm.String', true);
  /**
   * Representation of the {@link RecurringPostingsLine.accountName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AccountName', 'Edm.String', true);
  /**
   * Representation of the {@link RecurringPostingsLine.debit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  debit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Debit', 'Edm.Double', true);
  /**
   * Representation of the {@link RecurringPostingsLine.credit} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  credit: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Credit', 'Edm.Double', true);
  /**
   * Representation of the {@link RecurringPostingsLine.currency} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  currency: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true);
  /**
   * Representation of the {@link RecurringPostingsLine.taxGroup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxGroup: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxGroup', 'Edm.String', true);
  /**
   * Representation of the {@link RecurringPostingsLine.vatLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatLine: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('VatLine', BoYesNoEnum, true);
  /**
   * Representation of the {@link RecurringPostingsLine.distributionRule} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  distributionRule: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'DistributionRule',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link RecurringPostingsLine.taxPostingAccount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxPostingAccount: EnumField<
    EntityT,
    DeSerializersT,
    BoTaxPostingAccountTypeEnum,
    true,
    false
  > = this._fieldBuilder.buildEnumField(
    'TaxPostingAccount',
    BoTaxPostingAccountTypeEnum,
    true
  );
  /**
   * Representation of the {@link RecurringPostingsLine.taxCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxCode', 'Edm.String', true);
  /**
   * Representation of the {@link RecurringPostingsLine.costingCode1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostingCode1', 'Edm.String', true);
  /**
   * Representation of the {@link RecurringPostingsLine.costingCode2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostingCode2', 'Edm.String', true);
  /**
   * Representation of the {@link RecurringPostingsLine.costingCode3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostingCode3', 'Edm.String', true);
  /**
   * Representation of the {@link RecurringPostingsLine.costingCode4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostingCode4', 'Edm.String', true);
  /**
   * Representation of the {@link RecurringPostingsLine.costingCode5} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costingCode5: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CostingCode5', 'Edm.String', true);
  /**
   * Representation of the {@link RecurringPostingsLine.wTaxLiable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wTaxLiable: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('WTaxLiable', BoYesNoEnum, true);
  /**
   * Representation of the {@link RecurringPostingsLine.wTaxLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wTaxLine: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('WTaxLine', BoYesNoEnum, true);
  /**
   * Representation of the {@link RecurringPostingsLine.projectCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  projectCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ProjectCode', 'Edm.String', true);
  /**
   * Representation of the {@link RecurringPostingsLine.costElementCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  costElementCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'CostElementCode',
    'Edm.String',
    true
  );

  /**
   * Creates an instance of RecurringPostingsLineField.
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
      RecurringPostingsLine,
      fieldOptions
    );
  }
}

export namespace RecurringPostingsLine {
  /**
   * Metadata information on all properties of the `RecurringPostingsLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<RecurringPostingsLine>[] = [
    {
      originalName: 'RcrCode',
      name: 'rcrCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LineNumber',
      name: 'lineNumber',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'ControlAccount',
      name: 'controlAccount',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AccountCode',
      name: 'accountCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AccountName',
      name: 'accountName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Debit',
      name: 'debit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Credit',
      name: 'credit',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Currency',
      name: 'currency',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxGroup',
      name: 'taxGroup',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'VatLine',
      name: 'vatLine',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'DistributionRule',
      name: 'distributionRule',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxPostingAccount',
      name: 'taxPostingAccount',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'TaxCode',
      name: 'taxCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostingCode1',
      name: 'costingCode1',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostingCode2',
      name: 'costingCode2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostingCode3',
      name: 'costingCode3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostingCode4',
      name: 'costingCode4',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostingCode5',
      name: 'costingCode5',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'WTaxLiable',
      name: 'wTaxLiable',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'WTaxLine',
      name: 'wTaxLine',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'ProjectCode',
      name: 'projectCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CostElementCode',
      name: 'costElementCode',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
