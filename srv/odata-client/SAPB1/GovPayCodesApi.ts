/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GovPayCodes } from './GovPayCodes';
import { GovPayCodesRequestBuilder } from './GovPayCodesRequestBuilder';
import { NfTaxCategoriesApi } from './NfTaxCategoriesApi';
import { GovPayCodeAuthority } from './GovPayCodeAuthority';
import { BoYesNoEnum } from './BoYesNoEnum';
import { GovPayCodePeriodicityEnum } from './GovPayCodePeriodicityEnum';
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
  CollectionField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class GovPayCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<GovPayCodes<DeSerializersT>, DeSerializersT>
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
  ): GovPayCodesApi<DeSerializersT> {
    return new GovPayCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link nfTaxCategories} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NF_TAX_CATEGORIES: OneToManyLink<
      GovPayCodes<DeSerializersT>,
      DeSerializersT,
      NfTaxCategoriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [NfTaxCategoriesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      NF_TAX_CATEGORIES: new OneToManyLink(
        'NFTaxCategories',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = GovPayCodes;

  requestBuilder(): GovPayCodesRequestBuilder<DeSerializersT> {
    return new GovPayCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    GovPayCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<GovPayCodes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<GovPayCodes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof GovPayCodes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(GovPayCodes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ID: OrderableEdmTypeField<
      GovPayCodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      GovPayCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCR: OrderableEdmTypeField<
      GovPayCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE_TAX: EnumField<
      GovPayCodes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PRDCITY: EnumField<
      GovPayCodes<DeSerializers>,
      DeSerializersT,
      GovPayCodePeriodicityEnum,
      true,
      true
    >;
    GOV_PAY_CODE_AUTHORITIES: CollectionField<
      GovPayCodes<DeSerializers>,
      DeSerializersT,
      GovPayCodeAuthority,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link nfTaxCategories} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NF_TAX_CATEGORIES: OneToManyLink<
      GovPayCodes<DeSerializersT>,
      DeSerializersT,
      NfTaxCategoriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<GovPayCodes<DeSerializers>>;
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
         * Static representation of the {@link descr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCR: fieldBuilder.buildEdmTypeField('Descr', 'Edm.String', true),
        /**
         * Static representation of the {@link stateTax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_TAX: fieldBuilder.buildEnumField('StateTax', BoYesNoEnum, true),
        /**
         * Static representation of the {@link prdcity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRDCITY: fieldBuilder.buildEnumField(
          'Prdcity',
          GovPayCodePeriodicityEnum,
          true
        ),
        /**
         * Static representation of the {@link govPayCodeAuthorities} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOV_PAY_CODE_AUTHORITIES: fieldBuilder.buildCollectionField(
          'GovPayCodeAuthorities',
          GovPayCodeAuthority,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GovPayCodes)
      };
    }

    return this._schema;
  }
}
