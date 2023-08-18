/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesTaxAuthoritiesTypes } from './SalesTaxAuthoritiesTypes';
import { SalesTaxAuthoritiesTypesRequestBuilder } from './SalesTaxAuthoritiesTypesRequestBuilder';
import { SalesTaxAuthoritiesApi } from './SalesTaxAuthoritiesApi';
import { UsersApi } from './UsersApi';
import { DepreciationAreasApi } from './DepreciationAreasApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class SalesTaxAuthoritiesTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SalesTaxAuthoritiesTypes<DeSerializersT>, DeSerializersT>
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
  ): SalesTaxAuthoritiesTypesApi<DeSerializersT> {
    return new SalesTaxAuthoritiesTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link salesTaxAuthorities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_AUTHORITIES: OneToManyLink<
      SalesTaxAuthoritiesTypes<DeSerializersT>,
      DeSerializersT,
      SalesTaxAuthoritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      SalesTaxAuthoritiesTypes<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link depreciationAreas} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPRECIATION_AREAS: OneToManyLink<
      SalesTaxAuthoritiesTypes<DeSerializersT>,
      DeSerializersT,
      DepreciationAreasApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesTaxAuthoritiesApi<DeSerializersT>,
      UsersApi<DeSerializersT>,
      DepreciationAreasApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SALES_TAX_AUTHORITIES: new OneToManyLink(
        'SalesTaxAuthorities',
        this,
        linkedApis[0]
      ),
      USER: new OneToOneLink('User', this, linkedApis[1]),
      DEPRECIATION_AREAS: new OneToManyLink(
        'DepreciationAreas',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = SalesTaxAuthoritiesTypes;

  requestBuilder(): SalesTaxAuthoritiesTypesRequestBuilder<DeSerializersT> {
    return new SalesTaxAuthoritiesTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesTaxAuthoritiesTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesTaxAuthoritiesTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesTaxAuthoritiesTypes<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof SalesTaxAuthoritiesTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesTaxAuthoritiesTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    USER_SIGNATURE: OrderableEdmTypeField<
      SalesTaxAuthoritiesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      SalesTaxAuthoritiesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VAT: EnumField<
      SalesTaxAuthoritiesTypes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    NUMERATOR: OrderableEdmTypeField<
      SalesTaxAuthoritiesTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TAX_CREDIT_CONTROL: EnumField<
      SalesTaxAuthoritiesTypes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link salesTaxAuthorities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_TAX_AUTHORITIES: OneToManyLink<
      SalesTaxAuthoritiesTypes<DeSerializersT>,
      DeSerializersT,
      SalesTaxAuthoritiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      SalesTaxAuthoritiesTypes<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link depreciationAreas} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPRECIATION_AREAS: OneToManyLink<
      SalesTaxAuthoritiesTypes<DeSerializersT>,
      DeSerializersT,
      DepreciationAreasApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesTaxAuthoritiesTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link userSignature} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_SIGNATURE: fieldBuilder.buildEdmTypeField(
          'UserSignature',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link vat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT: fieldBuilder.buildEnumField('VAT', BoYesNoEnum, true),
        /**
         * Static representation of the {@link numerator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMERATOR: fieldBuilder.buildEdmTypeField(
          'Numerator',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link taxCreditControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CREDIT_CONTROL: fieldBuilder.buildEnumField(
          'TaxCreditControl',
          BoYesNoEnum,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesTaxAuthoritiesTypes)
      };
    }

    return this._schema;
  }
}
