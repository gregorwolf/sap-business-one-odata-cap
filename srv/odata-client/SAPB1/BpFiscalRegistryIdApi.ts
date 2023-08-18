/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BpFiscalRegistryId } from './BpFiscalRegistryId';
import { BpFiscalRegistryIdRequestBuilder } from './BpFiscalRegistryIdRequestBuilder';
import { BusinessPlacesApi } from './BusinessPlacesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BpFiscalRegistryIdApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BpFiscalRegistryId<DeSerializersT>, DeSerializersT>
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
  ): BpFiscalRegistryIdApi<DeSerializersT> {
    return new BpFiscalRegistryIdApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link businessPlaces} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACES: OneToManyLink<
      BpFiscalRegistryId<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BusinessPlacesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_PLACES: new OneToManyLink('BusinessPlaces', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = BpFiscalRegistryId;

  requestBuilder(): BpFiscalRegistryIdRequestBuilder<DeSerializersT> {
    return new BpFiscalRegistryIdRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BpFiscalRegistryId<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BpFiscalRegistryId<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BpFiscalRegistryId<DeSerializersT>,
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
    typeof BpFiscalRegistryId,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BpFiscalRegistryId,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NUMERATOR: OrderableEdmTypeField<
      BpFiscalRegistryId<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CNAE_CODE: OrderableEdmTypeField<
      BpFiscalRegistryId<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BpFiscalRegistryId<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessPlaces} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PLACES: OneToManyLink<
      BpFiscalRegistryId<DeSerializersT>,
      DeSerializersT,
      BusinessPlacesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BpFiscalRegistryId<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link cnaeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CNAE_CODE: fieldBuilder.buildEdmTypeField(
          'CNAECode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BpFiscalRegistryId)
      };
    }

    return this._schema;
  }
}
