/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ValueMapping } from './ValueMapping';
import { ValueMappingRequestBuilder } from './ValueMappingRequestBuilder';
import { VmThirdPartyValuesData } from './VmThirdPartyValuesData';
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
  CollectionField
} from '@sap-cloud-sdk/odata-v4';
export class ValueMappingApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ValueMapping<DeSerializersT>, DeSerializersT>
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
  ): ValueMappingApi<DeSerializersT> {
    return new ValueMappingApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ValueMapping;

  requestBuilder(): ValueMappingRequestBuilder<DeSerializersT> {
    return new ValueMappingRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ValueMapping<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ValueMapping<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ValueMapping<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ValueMapping, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ValueMapping, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      ValueMapping<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    OBJECT_ID: OrderableEdmTypeField<
      ValueMapping<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    OBJECT_ABS_ENTRY: OrderableEdmTypeField<
      ValueMapping<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VM_THIRD_PARTY_VALUES_COLLECTION: CollectionField<
      ValueMapping<DeSerializers>,
      DeSerializersT,
      VmThirdPartyValuesData,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ValueMapping<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABS_ENTRY: fieldBuilder.buildEdmTypeField(
          'AbsEntry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link objectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_ID: fieldBuilder.buildEdmTypeField(
          'ObjectId',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link objectAbsEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_ABS_ENTRY: fieldBuilder.buildEdmTypeField(
          'ObjectAbsEntry',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vmThirdPartyValuesCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VM_THIRD_PARTY_VALUES_COLLECTION: fieldBuilder.buildCollectionField(
          'VM_ThirdPartyValuesCollection',
          VmThirdPartyValuesData,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ValueMapping)
      };
    }

    return this._schema;
  }
}
