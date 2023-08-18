/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ResourceCapacities } from './ResourceCapacities';
import { ResourceCapacitiesRequestBuilder } from './ResourceCapacitiesRequestBuilder';
import { ResourcesApi } from './ResourcesApi';
import { WarehousesApi } from './WarehousesApi';
import { ResourceCapacityTypeEnum } from './ResourceCapacityTypeEnum';
import { ResourceCapacitySourceTypeEnum } from './ResourceCapacitySourceTypeEnum';
import { ResourceCapacityBaseTypeEnum } from './ResourceCapacityBaseTypeEnum';
import { ResourceCapacityActionEnum } from './ResourceCapacityActionEnum';
import { ResourceCapacityOwningTypeEnum } from './ResourceCapacityOwningTypeEnum';
import { ResourceCapacityRevertedTypeEnum } from './ResourceCapacityRevertedTypeEnum';
import { ResourceCapacityMemoSourceEnum } from './ResourceCapacityMemoSourceEnum';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ResourceCapacitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ResourceCapacities<DeSerializersT>, DeSerializersT>
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
  ): ResourceCapacitiesApi<DeSerializersT> {
    return new ResourceCapacitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link resource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE: OneToOneLink<
      ResourceCapacities<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_2: OneToOneLink<
      ResourceCapacities<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ResourcesApi<DeSerializersT>, WarehousesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RESOURCE: new OneToOneLink('Resource', this, linkedApis[0]),
      WAREHOUSE_2: new OneToOneLink('Warehouse2', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = ResourceCapacities;

  requestBuilder(): ResourceCapacitiesRequestBuilder<DeSerializersT> {
    return new ResourceCapacitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ResourceCapacities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ResourceCapacities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ResourceCapacities<DeSerializersT>,
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
    typeof ResourceCapacities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ResourceCapacities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CODE: OrderableEdmTypeField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE: OrderableEdmTypeField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    TYPE: EnumField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      ResourceCapacityTypeEnum,
      true,
      true
    >;
    CAPACITY: OrderableEdmTypeField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SOURCE_TYPE: EnumField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      ResourceCapacitySourceTypeEnum,
      true,
      true
    >;
    SOURCE_ENTRY: OrderableEdmTypeField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SOURCE_LINE_NUM: OrderableEdmTypeField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BASE_TYPE: EnumField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      ResourceCapacityBaseTypeEnum,
      true,
      true
    >;
    BASE_ENTRY: OrderableEdmTypeField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    BASE_LINE_NUM: OrderableEdmTypeField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ACTION: EnumField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      ResourceCapacityActionEnum,
      true,
      true
    >;
    OWNING_TYPE: EnumField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      ResourceCapacityOwningTypeEnum,
      true,
      true
    >;
    OWNING_ENTRY: OrderableEdmTypeField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    OWNING_LINE_NUM: OrderableEdmTypeField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    REVERTED_TYPE: EnumField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      ResourceCapacityRevertedTypeEnum,
      true,
      true
    >;
    REVERTED_ENTRY: OrderableEdmTypeField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    REVERTED_LINE_NUM: OrderableEdmTypeField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    MEMO_SOURCE: EnumField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      ResourceCapacityMemoSourceEnum,
      true,
      true
    >;
    MEMO: OrderableEdmTypeField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SINGLE_RUN_CAPACITY: OrderableEdmTypeField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SINGLE_RUN_MEMO_SOURCE: EnumField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      ResourceCapacityMemoSourceEnum,
      true,
      true
    >;
    SINGLE_RUN_MEMO: OrderableEdmTypeField<
      ResourceCapacities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link resource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCE: OneToOneLink<
      ResourceCapacities<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_2: OneToOneLink<
      ResourceCapacities<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ResourceCapacities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.Int32', false),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true),
        /**
         * Static representation of the {@link warehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'Warehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          ResourceCapacityTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link capacity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPACITY: fieldBuilder.buildEdmTypeField(
          'Capacity',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link sourceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TYPE: fieldBuilder.buildEnumField(
          'SourceType',
          ResourceCapacitySourceTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link sourceEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_ENTRY: fieldBuilder.buildEdmTypeField(
          'SourceEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link sourceLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'SourceLineNum',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link baseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_TYPE: fieldBuilder.buildEnumField(
          'BaseType',
          ResourceCapacityBaseTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link baseEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_ENTRY: fieldBuilder.buildEdmTypeField(
          'BaseEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link baseLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'BaseLineNum',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link action} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION: fieldBuilder.buildEnumField(
          'Action',
          ResourceCapacityActionEnum,
          true
        ),
        /**
         * Static representation of the {@link owningType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNING_TYPE: fieldBuilder.buildEnumField(
          'OwningType',
          ResourceCapacityOwningTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link owningEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNING_ENTRY: fieldBuilder.buildEdmTypeField(
          'OwningEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link owningLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNING_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'OwningLineNum',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link revertedType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERTED_TYPE: fieldBuilder.buildEnumField(
          'RevertedType',
          ResourceCapacityRevertedTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link revertedEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERTED_ENTRY: fieldBuilder.buildEdmTypeField(
          'RevertedEntry',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link revertedLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERTED_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'RevertedLineNum',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link memoSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEMO_SOURCE: fieldBuilder.buildEnumField(
          'MemoSource',
          ResourceCapacityMemoSourceEnum,
          true
        ),
        /**
         * Static representation of the {@link memo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEMO: fieldBuilder.buildEdmTypeField('Memo', 'Edm.String', true),
        /**
         * Static representation of the {@link singleRunCapacity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SINGLE_RUN_CAPACITY: fieldBuilder.buildEdmTypeField(
          'SingleRunCapacity',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link singleRunMemoSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SINGLE_RUN_MEMO_SOURCE: fieldBuilder.buildEnumField(
          'SingleRunMemoSource',
          ResourceCapacityMemoSourceEnum,
          true
        ),
        /**
         * Static representation of the {@link singleRunMemo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SINGLE_RUN_MEMO: fieldBuilder.buildEdmTypeField(
          'SingleRunMemo',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ResourceCapacities)
      };
    }

    return this._schema;
  }
}
