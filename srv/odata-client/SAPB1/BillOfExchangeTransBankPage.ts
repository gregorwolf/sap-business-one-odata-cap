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
 * BillOfExchangeTransBankPage
 */
export interface BillOfExchangeTransBankPage<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Account Code.
   * @nullable
   */
  accountCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Sequence.
   * @nullable
   */
  sequence?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * U Bp Doc Nr.
   * @nullable
   */
  uBpDocNr?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * U Bp P Date.
   * @nullable
   */
  uBpPDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * U Bp T Date.
   * @nullable
   */
  uBpTDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * U Bp C Bala.
   * @nullable
   */
  uBpCBala?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * U Bp N Bala.
   * @nullable
   */
  uBpNBala?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * U Bp G Lacc.
   * @nullable
   */
  uBpGLacc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bp Statu.
   * @nullable
   */
  uBpStatu?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bp Ex Doc.
   * @nullable
   */
  uBpExDoc?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * U Bp Pay Do.
   * @nullable
   */
  uBpPayDo?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * U Bp Vat.
   * @nullable
   */
  uBpVat?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bp Vat A.
   * @nullable
   */
  uBpVatA?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * U Bp Pc.
   * @nullable
   */
  uBpPc?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bp Prj.
   * @nullable
   */
  uBpPrj?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bp Dmcm.
   * @nullable
   */
  uBpDmcm?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bp F Out.
   * @nullable
   */
  uBpFOut?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * U Bp F In.
   * @nullable
   */
  uBpFIn?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * U Bp F Curr.
   * @nullable
   */
  uBpFCurr?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * U Bp F Rate.
   * @nullable
   */
  uBpFRate?: DeserializedType<DeSerializersT, 'Edm.Double'>;
  /**
   * U Bp Fvat.
   * @nullable
   */
  uBpFvat?: DeserializedType<DeSerializersT, 'Edm.Double'>;
}

/**
 * BillOfExchangeTransBankPageField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BillOfExchangeTransBankPageField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BillOfExchangeTransBankPage,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BillOfExchangeTransBankPage.accountCode} property for query construction.
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
   * Representation of the {@link BillOfExchangeTransBankPage.sequence} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  sequence: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Sequence', 'Edm.Int32', true);
  /**
   * Representation of the {@link BillOfExchangeTransBankPage.uBpDocNr} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpDocNr: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_DocNr', 'Edm.Int32', true);
  /**
   * Representation of the {@link BillOfExchangeTransBankPage.uBpPDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpPDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'U_BP_PDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BillOfExchangeTransBankPage.uBpTDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpTDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'U_BP_TDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BillOfExchangeTransBankPage.uBpCBala} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpCBala: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_CBala', 'Edm.Double', true);
  /**
   * Representation of the {@link BillOfExchangeTransBankPage.uBpNBala} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpNBala: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_NBala', 'Edm.Double', true);
  /**
   * Representation of the {@link BillOfExchangeTransBankPage.uBpGLacc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpGLacc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_GLacc', 'Edm.String', true);
  /**
   * Representation of the {@link BillOfExchangeTransBankPage.uBpStatu} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpStatu: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_Statu', 'Edm.String', true);
  /**
   * Representation of the {@link BillOfExchangeTransBankPage.uBpExDoc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpExDoc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_ExDoc', 'Edm.Int32', true);
  /**
   * Representation of the {@link BillOfExchangeTransBankPage.uBpPayDo} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpPayDo: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_PayDo', 'Edm.Int32', true);
  /**
   * Representation of the {@link BillOfExchangeTransBankPage.uBpVat} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpVat: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_VAT', 'Edm.String', true);
  /**
   * Representation of the {@link BillOfExchangeTransBankPage.uBpVatA} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpVatA: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_VAT_A', 'Edm.Double', true);
  /**
   * Representation of the {@link BillOfExchangeTransBankPage.uBpPc} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpPc: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_PC', 'Edm.String', true);
  /**
   * Representation of the {@link BillOfExchangeTransBankPage.uBpPrj} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpPrj: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_Prj', 'Edm.String', true);
  /**
   * Representation of the {@link BillOfExchangeTransBankPage.uBpDmcm} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpDmcm: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_DMCM', 'Edm.String', true);
  /**
   * Representation of the {@link BillOfExchangeTransBankPage.uBpFOut} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpFOut: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_FOut', 'Edm.Double', true);
  /**
   * Representation of the {@link BillOfExchangeTransBankPage.uBpFIn} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpFIn: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_FIn', 'Edm.Double', true);
  /**
   * Representation of the {@link BillOfExchangeTransBankPage.uBpFCurr} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpFCurr: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_FCurr', 'Edm.String', true);
  /**
   * Representation of the {@link BillOfExchangeTransBankPage.uBpFRate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpFRate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_FRate', 'Edm.Double', true);
  /**
   * Representation of the {@link BillOfExchangeTransBankPage.uBpFvat} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  uBpFvat: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Double',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('U_BP_FVAT', 'Edm.Double', true);

  /**
   * Creates an instance of BillOfExchangeTransBankPageField.
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
      BillOfExchangeTransBankPage,
      fieldOptions
    );
  }
}

export namespace BillOfExchangeTransBankPage {
  /**
   * Metadata information on all properties of the `BillOfExchangeTransBankPage` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BillOfExchangeTransBankPage>[] =
    [
      {
        originalName: 'AccountCode',
        name: 'accountCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Sequence',
        name: 'sequence',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'U_BP_DocNr',
        name: 'uBpDocNr',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'U_BP_PDate',
        name: 'uBpPDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'U_BP_TDate',
        name: 'uBpTDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'U_BP_CBala',
        name: 'uBpCBala',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'U_BP_NBala',
        name: 'uBpNBala',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'U_BP_GLacc',
        name: 'uBpGLacc',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'U_BP_Statu',
        name: 'uBpStatu',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'U_BP_ExDoc',
        name: 'uBpExDoc',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'U_BP_PayDo',
        name: 'uBpPayDo',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'U_BP_VAT',
        name: 'uBpVat',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'U_BP_VAT_A',
        name: 'uBpVatA',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'U_BP_PC',
        name: 'uBpPc',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'U_BP_Prj',
        name: 'uBpPrj',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'U_BP_DMCM',
        name: 'uBpDmcm',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'U_BP_FOut',
        name: 'uBpFOut',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'U_BP_FIn',
        name: 'uBpFIn',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'U_BP_FCurr',
        name: 'uBpFCurr',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'U_BP_FRate',
        name: 'uBpFRate',
        type: 'Edm.Double',
        isCollection: false
      },
      {
        originalName: 'U_BP_FVAT',
        name: 'uBpFvat',
        type: 'Edm.Double',
        isCollection: false
      }
    ];
}
