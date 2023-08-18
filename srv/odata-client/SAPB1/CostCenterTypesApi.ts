/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CostCenterTypes } from './CostCenterTypes';
import { CostCenterTypesRequestBuilder } from './CostCenterTypesRequestBuilder';
import { ProfitCentersApi } from './ProfitCentersApi';
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
export class CostCenterTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CostCenterTypes<DeSerializersT>, DeSerializersT>
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
  ): CostCenterTypesApi<DeSerializersT> {
    return new CostCenterTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link profitCenters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROFIT_CENTERS: OneToManyLink<
      CostCenterTypes<DeSerializersT>,
      DeSerializersT,
      ProfitCentersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProfitCentersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PROFIT_CENTERS: new OneToManyLink('ProfitCenters', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = CostCenterTypes;

  requestBuilder(): CostCenterTypesRequestBuilder<DeSerializersT> {
    return new CostCenterTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CostCenterTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CostCenterTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CostCenterTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CostCenterTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CostCenterTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COST_CENTER_TYPE_CODE: OrderableEdmTypeField<
      CostCenterTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_CENTER_TYPE_NAME: OrderableEdmTypeField<
      CostCenterTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link profitCenters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROFIT_CENTERS: OneToManyLink<
      CostCenterTypes<DeSerializersT>,
      DeSerializersT,
      ProfitCentersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CostCenterTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link costCenterTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CENTER_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'CostCenterTypeCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link costCenterTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CENTER_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'CostCenterTypeName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CostCenterTypes)
      };
    }

    return this._schema;
  }
}
