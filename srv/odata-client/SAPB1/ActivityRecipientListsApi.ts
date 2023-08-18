/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ActivityRecipientLists } from './ActivityRecipientLists';
import { ActivityRecipientListsRequestBuilder } from './ActivityRecipientListsRequestBuilder';
import { ActivitiesApi } from './ActivitiesApi';
import { ActivityRecipient } from './ActivityRecipient';
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
export class ActivityRecipientListsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ActivityRecipientLists<DeSerializersT>, DeSerializersT>
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
  ): ActivityRecipientListsApi<DeSerializersT> {
    return new ActivityRecipientListsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link activities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITIES: OneToManyLink<
      ActivityRecipientLists<DeSerializersT>,
      DeSerializersT,
      ActivitiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [ActivitiesApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      ACTIVITIES: new OneToManyLink('Activities', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ActivityRecipientLists;

  requestBuilder(): ActivityRecipientListsRequestBuilder<DeSerializersT> {
    return new ActivityRecipientListsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ActivityRecipientLists<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ActivityRecipientLists<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ActivityRecipientLists<DeSerializersT>,
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
    typeof ActivityRecipientLists,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ActivityRecipientLists,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      ActivityRecipientLists<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ActivityRecipientLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE: EnumField<
      ActivityRecipientLists<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    IS_MULTIPLE: EnumField<
      ActivityRecipientLists<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    ACTIVITY_RECIPIENT_COLLECTION: CollectionField<
      ActivityRecipientLists<DeSerializers>,
      DeSerializersT,
      ActivityRecipient,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link activities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITIES: OneToManyLink<
      ActivityRecipientLists<DeSerializersT>,
      DeSerializersT,
      ActivitiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ActivityRecipientLists<DeSerializers>>;
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
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEnumField('Active', BoYesNoEnum, true),
        /**
         * Static representation of the {@link isMultiple} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MULTIPLE: fieldBuilder.buildEnumField(
          'IsMultiple',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link activityRecipientCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_RECIPIENT_COLLECTION: fieldBuilder.buildCollectionField(
          'ActivityRecipientCollection',
          ActivityRecipient,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ActivityRecipientLists)
      };
    }

    return this._schema;
  }
}
