/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TargetGroups } from './TargetGroups';
import { TargetGroupsRequestBuilder } from './TargetGroupsRequestBuilder';
import { CampaignsApi } from './CampaignsApi';
import { TargetGroupsDetail } from './TargetGroupsDetail';
import { TargetGroupTypeEnum } from './TargetGroupTypeEnum';
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
export class TargetGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TargetGroups<DeSerializersT>, DeSerializersT>
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
  ): TargetGroupsApi<DeSerializersT> {
    return new TargetGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link campaigns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CAMPAIGNS: OneToManyLink<
      TargetGroups<DeSerializersT>,
      DeSerializersT,
      CampaignsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [CampaignsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      CAMPAIGNS: new OneToManyLink('Campaigns', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = TargetGroups;

  requestBuilder(): TargetGroupsRequestBuilder<DeSerializersT> {
    return new TargetGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TargetGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TargetGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TargetGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TargetGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TargetGroups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TARGET_GROUP_CODE: OrderableEdmTypeField<
      TargetGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TARGET_GROUP_NAME: OrderableEdmTypeField<
      TargetGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TARGET_GROUP_TYPE: EnumField<
      TargetGroups<DeSerializers>,
      DeSerializersT,
      TargetGroupTypeEnum,
      true,
      true
    >;
    TARGET_GROUPS_DETAILS: CollectionField<
      TargetGroups<DeSerializers>,
      DeSerializersT,
      TargetGroupsDetail,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link campaigns} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CAMPAIGNS: OneToManyLink<
      TargetGroups<DeSerializersT>,
      DeSerializersT,
      CampaignsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TargetGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link targetGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'TargetGroupCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link targetGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'TargetGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link targetGroupType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_GROUP_TYPE: fieldBuilder.buildEnumField(
          'TargetGroupType',
          TargetGroupTypeEnum,
          true
        ),
        /**
         * Static representation of the {@link targetGroupsDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_GROUPS_DETAILS: fieldBuilder.buildCollectionField(
          'TargetGroupsDetails',
          TargetGroupsDetail,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TargetGroups)
      };
    }

    return this._schema;
  }
}
