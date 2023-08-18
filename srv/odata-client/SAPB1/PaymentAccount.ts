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
 * PaymentAccount
 */
export interface PaymentAccount<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Account Code.
   * @nullable
   */
  accountCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sum Paid.
   * @nullable
   */
  sumPaid?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Sum Paid Fc.
   * @nullable
   */
  sumPaidFc?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Decription.
   * @nullable
   */
  decription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Vat Group.
   * @nullable
   */
  vatGroup?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Account Name.
   * @nullable
   */
  accountName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Gross Amount.
   * @nullable
   */
  grossAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Profit Center.
   * @nullable
   */
  profitCenter?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Project Code.
   * @nullable
   */
  projectCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Vat Amount.
   * @nullable
   */
  vatAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * Profit Center 2.
   * @nullable
   */
  profitCenter2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Profit Center 3.
   * @nullable
   */
  profitCenter3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Profit Center 4.
   * @nullable
   */
  profitCenter4?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Profit Center 5.
   * @nullable
   */
  profitCenter5?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Location Code.
   * @nullable
   */
  locationCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Equalization Vat Amount.
   * @nullable
   */
  equalizationVatAmount?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * PaymentAccountField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class PaymentAccountField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  PaymentAccount,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link PaymentAccount.lineNum} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LineNum', 'Edm.Int32', true);
  /**
   * Representation of the {@link PaymentAccount.accountCode} property for query construction.
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
   * Representation of the {@link PaymentAccount.sumPaid} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumPaid: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SumPaid', 'Edm.Double', true);
  /**
   * Representation of the {@link PaymentAccount.sumPaidFc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sumPaidFc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SumPaidFC', 'Edm.Double', true);
  /**
   * Representation of the {@link PaymentAccount.decription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  decription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Decription', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentAccount.vatGroup} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatGroup: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VatGroup', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentAccount.accountName} property for query construction.
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
   * Representation of the {@link PaymentAccount.grossAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grossAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('GrossAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link PaymentAccount.profitCenter} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  profitCenter: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ProfitCenter', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentAccount.projectCode} property for query construction.
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
   * Representation of the {@link PaymentAccount.vatAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  vatAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('VatAmount', 'Edm.Double', true);
  /**
   * Representation of the {@link PaymentAccount.profitCenter2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  profitCenter2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ProfitCenter2', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentAccount.profitCenter3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  profitCenter3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ProfitCenter3', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentAccount.profitCenter4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  profitCenter4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ProfitCenter4', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentAccount.profitCenter5} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  profitCenter5: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ProfitCenter5', 'Edm.String', true);
  /**
   * Representation of the {@link PaymentAccount.locationCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  locationCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('LocationCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link PaymentAccount.equalizationVatAmount} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  equalizationVatAmount: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'EqualizationVatAmount',
    'Edm.Double',
    true
  );

  /**
   * Creates an instance of PaymentAccountField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, PaymentAccount, fieldOptions);
  }
}

export namespace PaymentAccount {
  /**
   * Metadata information on all properties of the `PaymentAccount` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PaymentAccount>[] = [
    {
      originalName: 'LineNum',
      name: 'lineNum',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'AccountCode',
      name: 'accountCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'SumPaid',
      name: 'sumPaid',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'SumPaidFC',
      name: 'sumPaidFc',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'Decription',
      name: 'decription',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'VatGroup',
      name: 'vatGroup',
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
      originalName: 'GrossAmount',
      name: 'grossAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ProfitCenter',
      name: 'profitCenter',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ProjectCode',
      name: 'projectCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'VatAmount',
      name: 'vatAmount',
      type: 'Edm.Double',
      isCollection: false
    },
    {
      originalName: 'ProfitCenter2',
      name: 'profitCenter2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ProfitCenter3',
      name: 'profitCenter3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ProfitCenter4',
      name: 'profitCenter4',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'ProfitCenter5',
      name: 'profitCenter5',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'LocationCode',
      name: 'locationCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'EqualizationVatAmount',
      name: 'equalizationVatAmount',
      type: 'Edm.Double',
      isCollection: false
    }
  ];
}
