/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NotaFiscalCst } from './NotaFiscalCst';
import { NotaFiscalCstRequestBuilder } from './NotaFiscalCstRequestBuilder';
import { WithholdingTaxCodesApi } from './WithholdingTaxCodesApi';
import { NfTaxCategoriesApi } from './NfTaxCategoriesApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class NotaFiscalCstApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<NotaFiscalCst<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): NotaFiscalCstApi<DeSerializersT> {
    return new NotaFiscalCstApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link withholdingTaxCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODES: OneToManyLink<
      NotaFiscalCst<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link nfTaxCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NF_TAX_CATEGORY: OneToOneLink<
      NotaFiscalCst<DeSerializersT>,
      DeSerializersT,
      NfTaxCategoriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WithholdingTaxCodesApi<DeSerializersT>,
      NfTaxCategoriesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WITHHOLDING_TAX_CODES: new OneToManyLink(
        'WithholdingTaxCodes',
        this,
        linkedApis[0]
      ),
      NF_TAX_CATEGORY: new OneToOneLink('NFTaxCategory', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = NotaFiscalCst;

  requestBuilder(): NotaFiscalCstRequestBuilder<DeSerializersT> {
    return new NotaFiscalCstRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    NotaFiscalCst<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<NotaFiscalCst<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<NotaFiscalCst<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof NotaFiscalCst, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(NotaFiscalCst, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      NotaFiscalCst<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      NotaFiscalCst<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SITUATION: OrderableEdmTypeField<
      NotaFiscalCst<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_CATEGORY: OrderableEdmTypeField<
      NotaFiscalCst<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CST_CODE_OUTGOING: OrderableEdmTypeField<
      NotaFiscalCst<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_OUTGOING: OrderableEdmTypeField<
      NotaFiscalCst<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link withholdingTaxCodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODES: OneToManyLink<
      NotaFiscalCst<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link nfTaxCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NF_TAX_CATEGORY: OneToOneLink<
      NotaFiscalCst<DeSerializersT>,
      DeSerializersT,
      NfTaxCategoriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<NotaFiscalCst<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true),
        /**
         * Static representation of the {@link situation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITUATION: fieldBuilder.buildEdmTypeField(
          'Situation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CATEGORY: fieldBuilder.buildEdmTypeField(
          'TaxCategory',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link cstCodeOutgoing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CST_CODE_OUTGOING: fieldBuilder.buildEdmTypeField(
          'CSTCodeOutgoing',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionOutgoing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_OUTGOING: fieldBuilder.buildEdmTypeField(
          'DescriptionOutgoing',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', NotaFiscalCst)
      };
    }

    return this._schema;
  }
}
