/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AttributeGroups } from './AttributeGroups';
import { AttributeGroupsRequestBuilder } from './AttributeGroupsRequestBuilder';
import { AssetClassesApi } from './AssetClassesApi';
import { AttributeGroupLine } from './AttributeGroupLine';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AttributeGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AttributeGroups<DeSerializersT>, DeSerializersT>
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
  ): AttributeGroupsApi<DeSerializersT> {
    return new AttributeGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link assetClasses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CLASSES: OneToManyLink<
      AttributeGroups<DeSerializersT>,
      DeSerializersT,
      AssetClassesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [AssetClassesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ASSET_CLASSES: new OneToManyLink('AssetClasses', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = AttributeGroups;

  requestBuilder(): AttributeGroupsRequestBuilder<DeSerializersT> {
    return new AttributeGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AttributeGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AttributeGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AttributeGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AttributeGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AttributeGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      AttributeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      AttributeGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCKED: EnumField<
      AttributeGroups<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ATTRIBUTE_GROUP_COLLECTION: CollectionField<
      AttributeGroups<DeSerializers>,
      DeSerializersT,
      AttributeGroupLine,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link assetClasses} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_CLASSES: OneToManyLink<
      AttributeGroups<DeSerializersT>,
      DeSerializersT,
      AssetClassesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AttributeGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('Code', 'Edm.Int32', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link locked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCKED: fieldBuilder.buildEnumField('Locked', BoYesNoEnum, true),
        /**
         * Static representation of the {@link attributeGroupCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_GROUP_COLLECTION: fieldBuilder.buildCollectionField(
          'AttributeGroupCollection',
          AttributeGroupLine,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AttributeGroups)
      };
    }

    return this._schema;
  }
}
