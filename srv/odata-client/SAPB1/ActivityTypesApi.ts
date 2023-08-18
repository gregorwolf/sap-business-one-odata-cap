/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ActivityTypes } from './ActivityTypes';
import { ActivityTypesRequestBuilder } from './ActivityTypesRequestBuilder';
import { ActivitySubjectsApi } from './ActivitySubjectsApi';
import { ContactsApi } from './ContactsApi';
import { ActivitiesApi } from './ActivitiesApi';
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
export class ActivityTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ActivityTypes<DeSerializersT>, DeSerializersT>
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
  ): ActivityTypesApi<DeSerializersT> {
    return new ActivityTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link activitySubjects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_SUBJECTS: OneToManyLink<
      ActivityTypes<DeSerializersT>,
      DeSerializersT,
      ActivitySubjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACTS: OneToManyLink<
      ActivityTypes<DeSerializersT>,
      DeSerializersT,
      ContactsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link activities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITIES: OneToManyLink<
      ActivityTypes<DeSerializersT>,
      DeSerializersT,
      ActivitiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ActivitySubjectsApi<DeSerializersT>,
      ContactsApi<DeSerializersT>,
      ActivitiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ACTIVITY_SUBJECTS: new OneToManyLink(
        'ActivitySubjects',
        this,
        linkedApis[0]
      ),
      CONTACTS: new OneToManyLink('Contacts', this, linkedApis[1]),
      ACTIVITIES: new OneToManyLink('Activities', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = ActivityTypes;

  requestBuilder(): ActivityTypesRequestBuilder<DeSerializersT> {
    return new ActivityTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ActivityTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ActivityTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ActivityTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ActivityTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ActivityTypes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      ActivityTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ActivityTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link activitySubjects} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITY_SUBJECTS: OneToManyLink<
      ActivityTypes<DeSerializersT>,
      DeSerializersT,
      ActivitySubjectsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link contacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTACTS: OneToManyLink<
      ActivityTypes<DeSerializersT>,
      DeSerializersT,
      ContactsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link activities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTIVITIES: OneToManyLink<
      ActivityTypes<DeSerializersT>,
      DeSerializersT,
      ActivitiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ActivityTypes<DeSerializers>>;
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ActivityTypes)
      };
    }

    return this._schema;
  }
}
