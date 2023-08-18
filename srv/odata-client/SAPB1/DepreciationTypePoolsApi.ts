/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DepreciationTypePools } from './DepreciationTypePools';
import { DepreciationTypePoolsRequestBuilder } from './DepreciationTypePoolsRequestBuilder';
import { DepreciationTypesApi } from './DepreciationTypesApi';
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
export class DepreciationTypePoolsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DepreciationTypePools<DeSerializersT>, DeSerializersT>
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
  ): DepreciationTypePoolsApi<DeSerializersT> {
    return new DepreciationTypePoolsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link depreciationTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPRECIATION_TYPES: OneToManyLink<
      DepreciationTypePools<DeSerializersT>,
      DeSerializersT,
      DepreciationTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DepreciationTypesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DEPRECIATION_TYPES: new OneToManyLink(
        'DepreciationTypes',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = DepreciationTypePools;

  requestBuilder(): DepreciationTypePoolsRequestBuilder<DeSerializersT> {
    return new DepreciationTypePoolsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DepreciationTypePools<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DepreciationTypePools<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DepreciationTypePools<DeSerializersT>,
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
    typeof DepreciationTypePools,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DepreciationTypePools,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      DepreciationTypePools<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DepreciationTypePools<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link depreciationTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPRECIATION_TYPES: OneToManyLink<
      DepreciationTypePools<DeSerializersT>,
      DeSerializersT,
      DepreciationTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DepreciationTypePools<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', false),
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
        ALL_FIELDS: new AllFields('*', DepreciationTypePools)
      };
    }

    return this._schema;
  }
}
