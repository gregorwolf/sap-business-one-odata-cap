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
 * PostingTemplatesLine
 */
export interface PostingTemplatesLine<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Trt Code.
   * @nullable
   */
  trtCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
   * Distribution Rule.
   * @nullable
   */
  distributionRule?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
 * PostingTemplatesLineField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PostingTemplatesLineField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PostingTemplatesLine,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PostingTemplatesLine.trtCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trtCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TrtCode', 'Edm.String', true);
  /**
   * Representation of the {@link PostingTemplatesLine.lineNumber} property for query construction.
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
   * Representation of the {@link PostingTemplatesLine.controlAccount} property for query construction.
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
   * Representation of the {@link PostingTemplatesLine.accountCode} property for query construction.
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
   * Representation of the {@link PostingTemplatesLine.accountName} property for query construction.
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
   * Representation of the {@link PostingTemplatesLine.debit} property for query construction.
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
   * Representation of the {@link PostingTemplatesLine.credit} property for query construction.
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
   * Representation of the {@link PostingTemplatesLine.taxGroup} property for query construction.
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
   * Representation of the {@link PostingTemplatesLine.vatLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatLine: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('VatLine', BoYesNoEnum, true);
  /**
   * Representation of the {@link PostingTemplatesLine.taxPostingAccount} property for query construction.
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
   * Representation of the {@link PostingTemplatesLine.taxCode} property for query construction.
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
   * Representation of the {@link PostingTemplatesLine.distributionRule} property for query construction.
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
   * Representation of the {@link PostingTemplatesLine.costingCode1} property for query construction.
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
   * Representation of the {@link PostingTemplatesLine.costingCode2} property for query construction.
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
   * Representation of the {@link PostingTemplatesLine.costingCode3} property for query construction.
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
   * Representation of the {@link PostingTemplatesLine.costingCode4} property for query construction.
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
   * Representation of the {@link PostingTemplatesLine.costingCode5} property for query construction.
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
   * Representation of the {@link PostingTemplatesLine.wTaxLiable} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wTaxLiable: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('WTaxLiable', BoYesNoEnum, true);
  /**
   * Representation of the {@link PostingTemplatesLine.wTaxLine} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  wTaxLine: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('WTaxLine', BoYesNoEnum, true);
  /**
   * Representation of the {@link PostingTemplatesLine.projectCode} property for query construction.
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
   * Representation of the {@link PostingTemplatesLine.costElementCode} property for query construction.
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
   * Creates an instance of PostingTemplatesLineField.
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
      PostingTemplatesLine,
      fieldOptions
    );
  }
}

export namespace PostingTemplatesLine {
  /**
   * Metadata information on all properties of the `PostingTemplatesLine` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PostingTemplatesLine>[] = [
    {
      originalName: 'TrtCode',
      name: 'trtCode',
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
      originalName: 'DistributionRule',
      name: 'distributionRule',
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
