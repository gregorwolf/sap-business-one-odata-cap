/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NfTaxCategories } from './NfTaxCategories';
import { NfTaxCategoriesRequestBuilder } from './NfTaxCategoriesRequestBuilder';
import { GovPayCodesApi } from './GovPayCodesApi';
import { NotaFiscalCstApi } from './NotaFiscalCstApi';
import { BoYesNoEnum } from './BoYesNoEnum';
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
  EnumField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class NfTaxCategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<NfTaxCategories<DeSerializersT>, DeSerializersT>
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
  ): NfTaxCategoriesApi<DeSerializersT> {
    return new NfTaxCategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link govPayCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOV_PAY_CODE: OneToOneLink<
      NfTaxCategories<DeSerializersT>,
      DeSerializersT,
      GovPayCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link notaFiscalCst} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NOTA_FISCAL_CST: OneToManyLink<
      NfTaxCategories<DeSerializersT>,
      DeSerializersT,
      NotaFiscalCstApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      GovPayCodesApi<DeSerializersT>,
      NotaFiscalCstApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      GOV_PAY_CODE: new OneToOneLink('GovPayCode', this, linkedApis[0]),
      NOTA_FISCAL_CST: new OneToManyLink('NotaFiscalCST', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = NfTaxCategories;

  requestBuilder(): NfTaxCategoriesRequestBuilder<DeSerializersT> {
    return new NfTaxCategoriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    NfTaxCategories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<NfTaxCategories<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<NfTaxCategories<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof NfTaxCategories, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        NfTaxCategories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ID: OrderableEdmTypeField<
      NfTaxCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      NfTaxCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCKED: EnumField<
      NfTaxCategories<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    GPC_ID: OrderableEdmTypeField<
      NfTaxCategories<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CES_TREL: EnumField<
      NfTaxCategories<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link govPayCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GOV_PAY_CODE: OneToOneLink<
      NfTaxCategories<DeSerializersT>,
      DeSerializersT,
      GovPayCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link notaFiscalCst} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NOTA_FISCAL_CST: OneToManyLink<
      NfTaxCategories<DeSerializersT>,
      DeSerializersT,
      NotaFiscalCstApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<NfTaxCategories<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABS_ID: fieldBuilder.buildEdmTypeField('AbsId', 'Edm.Int32', false),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true),
        /**
         * Static representation of the {@link locked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCKED: fieldBuilder.buildEnumField('Locked', BoYesNoEnum, true),
        /**
         * Static representation of the {@link gpcId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GPC_ID: fieldBuilder.buildEdmTypeField('GPCId', 'Edm.Int32', true),
        /**
         * Static representation of the {@link cesTrel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CES_TREL: fieldBuilder.buildEnumField('CESTrel', BoYesNoEnum, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', NfTaxCategories)
      };
    }

    return this._schema;
  }
}
