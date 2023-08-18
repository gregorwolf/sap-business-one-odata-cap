/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EnhancedDiscountGroups } from './EnhancedDiscountGroups';
import { EnhancedDiscountGroupsRequestBuilder } from './EnhancedDiscountGroupsRequestBuilder';
import { DiscountGroupLine } from './DiscountGroupLine';
import { DiscountGroupTypeEnum } from './DiscountGroupTypeEnum';
import { DiscountGroupRelationsEnum } from './DiscountGroupRelationsEnum';
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
  CollectionField
} from '@sap-cloud-sdk/odata-v4';
export class EnhancedDiscountGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EnhancedDiscountGroups<DeSerializersT>, DeSerializersT>
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
  ): EnhancedDiscountGroupsApi<DeSerializersT> {
    return new EnhancedDiscountGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EnhancedDiscountGroups;

  requestBuilder(): EnhancedDiscountGroupsRequestBuilder<DeSerializersT> {
    return new EnhancedDiscountGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EnhancedDiscountGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EnhancedDiscountGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EnhancedDiscountGroups<DeSerializersT>,
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
    typeof EnhancedDiscountGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EnhancedDiscountGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABS_ENTRY: OrderableEdmTypeField<
      EnhancedDiscountGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TYPE: EnumField<
      EnhancedDiscountGroups<DeSerializers>,
      DeSerializersT,
      DiscountGroupTypeEnum,
      true,
      true
    >;
    OBJECT_CODE: OrderableEdmTypeField<
      EnhancedDiscountGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_RELATIONS: EnumField<
      EnhancedDiscountGroups<DeSerializers>,
      DeSerializersT,
      DiscountGroupRelationsEnum,
      true,
      true
    >;
    ACTIVE: EnumField<
      EnhancedDiscountGroups<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      EnhancedDiscountGroups<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      EnhancedDiscountGroups<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DISCOUNT_GROUP_LINE_COLLECTION: CollectionField<
      EnhancedDiscountGroups<DeSerializers>,
      DeSerializersT,
      DiscountGroupLine,
      true,
      true
    >;
    ALL_FIELDS: AllFields<EnhancedDiscountGroups<DeSerializers>>;
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
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', DiscountGroupTypeEnum, true),
        /**
         * Static representation of the {@link objectCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_CODE: fieldBuilder.buildEdmTypeField(
          'ObjectCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discountRelations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_RELATIONS: fieldBuilder.buildEnumField(
          'DiscountRelations',
          DiscountGroupRelationsEnum,
          true
        ),
        /**
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', BoYesNoEnum, true),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link discountGroupLineCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_GROUP_LINE_COLLECTION: fieldBuilder.buildCollectionField(
          'DiscountGroupLineCollection',
          DiscountGroupLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EnhancedDiscountGroups)
      };
    }

    return this._schema;
  }
}
