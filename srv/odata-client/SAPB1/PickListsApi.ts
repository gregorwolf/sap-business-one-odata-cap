/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PickLists } from './PickLists';
import { PickListsRequestBuilder } from './PickListsRequestBuilder';
import { UsersApi } from './UsersApi';
import { PickListsLine } from './PickListsLine';
import { BoPickStatus } from './BoPickStatus';
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
  CollectionField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PickListsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PickLists<DeSerializersT>, DeSerializersT>
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
  ): PickListsApi<DeSerializersT> {
    return new PickListsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      PickLists<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [UsersApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      USER: new OneToOneLink('User', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = PickLists;

  requestBuilder(): PickListsRequestBuilder<DeSerializersT> {
    return new PickListsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PickLists<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PickLists<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PickLists<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PickLists, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PickLists, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABSOLUTEENTRY: OrderableEdmTypeField<
      PickLists<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      PickLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OWNER_CODE: OrderableEdmTypeField<
      PickLists<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    OWNER_NAME: OrderableEdmTypeField<
      PickLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICK_DATE: OrderableEdmTypeField<
      PickLists<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      PickLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      PickLists<DeSerializers>,
      DeSerializersT,
      BoPickStatus,
      true,
      true
    >;
    OBJECT_TYPE: OrderableEdmTypeField<
      PickLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_BASE_UNITS: EnumField<
      PickLists<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    PICK_LISTS_LINES: CollectionField<
      PickLists<DeSerializers>,
      DeSerializersT,
      PickListsLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link user} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER: OneToOneLink<
      PickLists<DeSerializersT>,
      DeSerializersT,
      UsersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PickLists<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absoluteentry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSOLUTEENTRY: fieldBuilder.buildEdmTypeField(
          'Absoluteentry',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link ownerCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNER_CODE: fieldBuilder.buildEdmTypeField(
          'OwnerCode',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link ownerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNER_NAME: fieldBuilder.buildEdmTypeField(
          'OwnerName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICK_DATE: fieldBuilder.buildEdmTypeField(
          'PickDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', BoPickStatus, true),
        /**
         * Static representation of the {@link objectType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_TYPE: fieldBuilder.buildEdmTypeField(
          'ObjectType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useBaseUnits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_BASE_UNITS: fieldBuilder.buildEnumField(
          'UseBaseUnits',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link pickListsLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICK_LISTS_LINES: fieldBuilder.buildCollectionField(
          'PickListsLines',
          PickListsLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PickLists)
      };
    }

    return this._schema;
  }
}
