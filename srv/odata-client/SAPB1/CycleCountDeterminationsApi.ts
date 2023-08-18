/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CycleCountDeterminations } from './CycleCountDeterminations';
import { CycleCountDeterminationsRequestBuilder } from './CycleCountDeterminationsRequestBuilder';
import { CycleCountDeterminationSetup } from './CycleCountDeterminationSetup';
import { CycleCountDeterminationCycleByEnum } from './CycleCountDeterminationCycleByEnum';
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
  CollectionField
} from '@sap-cloud-sdk/odata-v4';
export class CycleCountDeterminationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CycleCountDeterminations<DeSerializersT>, DeSerializersT>
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
  ): CycleCountDeterminationsApi<DeSerializersT> {
    return new CycleCountDeterminationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CycleCountDeterminations;

  requestBuilder(): CycleCountDeterminationsRequestBuilder<DeSerializersT> {
    return new CycleCountDeterminationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CycleCountDeterminations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CycleCountDeterminations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CycleCountDeterminations<DeSerializersT>,
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
    typeof CycleCountDeterminations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CycleCountDeterminations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WAREHOUSE_CODE: OrderableEdmTypeField<
      CycleCountDeterminations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CYCLE_BY: EnumField<
      CycleCountDeterminations<DeSerializers>,
      DeSerializersT,
      CycleCountDeterminationCycleByEnum,
      true,
      true
    >;
    CYCLE_COUNT_DETERMINATION_SETUP_COLLECTION: CollectionField<
      CycleCountDeterminations<DeSerializers>,
      DeSerializersT,
      CycleCountDeterminationSetup,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CycleCountDeterminations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link warehouseCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_CODE: fieldBuilder.buildEdmTypeField(
          'WarehouseCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cycleBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CYCLE_BY: fieldBuilder.buildEnumField(
          'CycleBy',
          CycleCountDeterminationCycleByEnum,
          true
        ),
        /**
         * Static representation of the {@link cycleCountDeterminationSetupCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CYCLE_COUNT_DETERMINATION_SETUP_COLLECTION:
          fieldBuilder.buildCollectionField(
            'CycleCountDeterminationSetupCollection',
            CycleCountDeterminationSetup,
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CycleCountDeterminations)
      };
    }

    return this._schema;
  }
}
