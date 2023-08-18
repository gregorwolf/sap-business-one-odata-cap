/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ChooseFromList } from './ChooseFromList';
import { ChooseFromListRequestBuilder } from './ChooseFromListRequestBuilder';
import { ChooseFromListLine } from './ChooseFromListLine';
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
export class ChooseFromListApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ChooseFromList<DeSerializersT>, DeSerializersT>
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
  ): ChooseFromListApi<DeSerializersT> {
    return new ChooseFromListApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ChooseFromList;

  requestBuilder(): ChooseFromListRequestBuilder<DeSerializersT> {
    return new ChooseFromListRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ChooseFromList<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ChooseFromList<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ChooseFromList<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ChooseFromList, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ChooseFromList, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    OBJECT_NAME: OrderableEdmTypeField<
      ChooseFromList<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHOOSE_FROM_LIST_LINES: CollectionField<
      ChooseFromList<DeSerializers>,
      DeSerializersT,
      ChooseFromListLine,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ChooseFromList<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link objectName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_NAME: fieldBuilder.buildEdmTypeField(
          'ObjectName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link chooseFromListLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHOOSE_FROM_LIST_LINES: fieldBuilder.buildCollectionField(
          'ChooseFromList_Lines',
          ChooseFromListLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ChooseFromList)
      };
    }

    return this._schema;
  }
}
