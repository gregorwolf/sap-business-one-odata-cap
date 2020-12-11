/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * ItemAttributeGroups
 */
export interface ItemAttributeGroups {
  /**
   * Attribute 1.
   * @nullable
   */
  attribute1?: string;
  /**
   * Attribute 2.
   * @nullable
   */
  attribute2?: string;
  /**
   * Attribute 3.
   * @nullable
   */
  attribute3?: string;
  /**
   * Attribute 4.
   * @nullable
   */
  attribute4?: string;
  /**
   * Attribute 5.
   * @nullable
   */
  attribute5?: string;
  /**
   * Attribute 6.
   * @nullable
   */
  attribute6?: string;
  /**
   * Attribute 7.
   * @nullable
   */
  attribute7?: string;
  /**
   * Attribute 8.
   * @nullable
   */
  attribute8?: string;
  /**
   * Attribute 9.
   * @nullable
   */
  attribute9?: string;
  /**
   * Attribute 10.
   * @nullable
   */
  attribute10?: string;
  /**
   * Attribute 11.
   * @nullable
   */
  attribute11?: string;
  /**
   * Attribute 12.
   * @nullable
   */
  attribute12?: string;
  /**
   * Attribute 13.
   * @nullable
   */
  attribute13?: string;
  /**
   * Attribute 14.
   * @nullable
   */
  attribute14?: string;
  /**
   * Attribute 15.
   * @nullable
   */
  attribute15?: string;
  /**
   * Attribute 16.
   * @nullable
   */
  attribute16?: string;
  /**
   * Attribute 17.
   * @nullable
   */
  attribute17?: string;
  /**
   * Attribute 18.
   * @nullable
   */
  attribute18?: string;
  /**
   * Attribute 19.
   * @nullable
   */
  attribute19?: string;
  /**
   * Attribute 20.
   * @nullable
   */
  attribute20?: string;
  /**
   * Attribute 21.
   * @nullable
   */
  attribute21?: string;
  /**
   * Attribute 22.
   * @nullable
   */
  attribute22?: string;
  /**
   * Attribute 23.
   * @nullable
   */
  attribute23?: string;
  /**
   * Attribute 24.
   * @nullable
   */
  attribute24?: string;
  /**
   * Attribute 25.
   * @nullable
   */
  attribute25?: string;
  /**
   * Attribute 26.
   * @nullable
   */
  attribute26?: string;
  /**
   * Attribute 27.
   * @nullable
   */
  attribute27?: string;
  /**
   * Attribute 28.
   * @nullable
   */
  attribute28?: string;
  /**
   * Attribute 29.
   * @nullable
   */
  attribute29?: string;
  /**
   * Attribute 30.
   * @nullable
   */
  attribute30?: string;
  /**
   * Attribute 31.
   * @nullable
   */
  attribute31?: string;
  /**
   * Attribute 32.
   * @nullable
   */
  attribute32?: string;
  /**
   * Attribute 33.
   * @nullable
   */
  attribute33?: number;
  /**
   * Attribute 34.
   * @nullable
   */
  attribute34?: number;
  /**
   * Attribute 35.
   * @nullable
   */
  attribute35?: number;
  /**
   * Attribute 36.
   * @nullable
   */
  attribute36?: number;
  /**
   * Attribute 37.
   * @nullable
   */
  attribute37?: number;
  /**
   * Attribute 38.
   * @nullable
   */
  attribute38?: number;
  /**
   * Attribute 39.
   * @nullable
   */
  attribute39?: number;
  /**
   * Attribute 40.
   * @nullable
   */
  attribute40?: number;
  /**
   * Attribute 41.
   * @nullable
   */
  attribute41?: number;
  /**
   * Attribute 42.
   * @nullable
   */
  attribute42?: number;
  /**
   * Attribute 43.
   * @nullable
   */
  attribute43?: Moment;
  /**
   * Attribute 44.
   * @nullable
   */
  attribute44?: Moment;
  /**
   * Attribute 45.
   * @nullable
   */
  attribute45?: Moment;
  /**
   * Attribute 46.
   * @nullable
   */
  attribute46?: Moment;
  /**
   * Attribute 47.
   * @nullable
   */
  attribute47?: Moment;
  /**
   * Attribute 48.
   * @nullable
   */
  attribute48?: number;
  /**
   * Attribute 49.
   * @nullable
   */
  attribute49?: number;
  /**
   * Attribute 50.
   * @nullable
   */
  attribute50?: number;
  /**
   * Attribute 51.
   * @nullable
   */
  attribute51?: number;
  /**
   * Attribute 52.
   * @nullable
   */
  attribute52?: number;
  /**
   * Attribute 53.
   * @nullable
   */
  attribute53?: number;
  /**
   * Attribute 54.
   * @nullable
   */
  attribute54?: number;
  /**
   * Attribute 55.
   * @nullable
   */
  attribute55?: number;
  /**
   * Attribute 56.
   * @nullable
   */
  attribute56?: number;
  /**
   * Attribute 57.
   * @nullable
   */
  attribute57?: number;
  /**
   * Attribute 58.
   * @nullable
   */
  attribute58?: number;
  /**
   * Attribute 59.
   * @nullable
   */
  attribute59?: number;
  /**
   * Attribute 60.
   * @nullable
   */
  attribute60?: number;
  /**
   * Attribute 61.
   * @nullable
   */
  attribute61?: number;
  /**
   * Attribute 62.
   * @nullable
   */
  attribute62?: number;
  /**
   * Attribute 63.
   * @nullable
   */
  attribute63?: number;
  /**
   * Attribute 64.
   * @nullable
   */
  attribute64?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[ItemAttributeGroups.build]] instead.
 */
export function createItemAttributeGroups(json: any): ItemAttributeGroups {
  return ItemAttributeGroups.build(json);
}

/**
 * ItemAttributeGroupsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class ItemAttributeGroupsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ItemAttributeGroups> {
  /**
   * Representation of the [[ItemAttributeGroups.attribute1]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute1: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute1', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute2', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute3', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute4]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute4: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute4', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute5]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute5: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute5', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute6]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute6: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute6', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute7]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute7: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute7', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute8]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute8: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute8', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute9]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute9: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute9', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute10]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute10: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute10', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute11]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute11: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute11', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute12]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute12: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute12', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute13]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute13: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute13', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute14]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute14: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute14', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute15]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute15: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute15', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute16]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute16: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute16', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute17]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute17: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute17', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute18]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute18: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute18', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute19]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute19: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute19', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute20]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute20: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute20', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute21]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute21: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute21', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute22]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute22: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute22', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute23]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute23: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute23', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute24]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute24: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute24', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute25]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute25: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute25', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute26]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute26: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute26', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute27]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute27: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute27', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute28]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute28: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute28', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute29]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute29: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute29', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute30]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute30: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute30', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute31]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute31: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute31', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute32]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute32: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Attribute32', this, 'Edm.String');
  /**
   * Representation of the [[ItemAttributeGroups.attribute33]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute33: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute33', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemAttributeGroups.attribute34]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute34: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute34', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemAttributeGroups.attribute35]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute35: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute35', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemAttributeGroups.attribute36]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute36: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute36', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemAttributeGroups.attribute37]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute37: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute37', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemAttributeGroups.attribute38]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute38: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute38', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemAttributeGroups.attribute39]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute39: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute39', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemAttributeGroups.attribute40]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute40: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute40', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemAttributeGroups.attribute41]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute41: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute41', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemAttributeGroups.attribute42]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute42: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute42', this, 'Edm.Int32');
  /**
   * Representation of the [[ItemAttributeGroups.attribute43]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute43: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Attribute43', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ItemAttributeGroups.attribute44]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute44: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Attribute44', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ItemAttributeGroups.attribute45]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute45: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Attribute45', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ItemAttributeGroups.attribute46]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute46: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Attribute46', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ItemAttributeGroups.attribute47]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute47: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Attribute47', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[ItemAttributeGroups.attribute48]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute48: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute48', this, 'Edm.Double');
  /**
   * Representation of the [[ItemAttributeGroups.attribute49]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute49: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute49', this, 'Edm.Double');
  /**
   * Representation of the [[ItemAttributeGroups.attribute50]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute50: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute50', this, 'Edm.Double');
  /**
   * Representation of the [[ItemAttributeGroups.attribute51]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute51: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute51', this, 'Edm.Double');
  /**
   * Representation of the [[ItemAttributeGroups.attribute52]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute52: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute52', this, 'Edm.Double');
  /**
   * Representation of the [[ItemAttributeGroups.attribute53]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute53: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute53', this, 'Edm.Double');
  /**
   * Representation of the [[ItemAttributeGroups.attribute54]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute54: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute54', this, 'Edm.Double');
  /**
   * Representation of the [[ItemAttributeGroups.attribute55]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute55: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute55', this, 'Edm.Double');
  /**
   * Representation of the [[ItemAttributeGroups.attribute56]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute56: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute56', this, 'Edm.Double');
  /**
   * Representation of the [[ItemAttributeGroups.attribute57]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute57: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute57', this, 'Edm.Double');
  /**
   * Representation of the [[ItemAttributeGroups.attribute58]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute58: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute58', this, 'Edm.Double');
  /**
   * Representation of the [[ItemAttributeGroups.attribute59]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute59: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute59', this, 'Edm.Double');
  /**
   * Representation of the [[ItemAttributeGroups.attribute60]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute60: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute60', this, 'Edm.Double');
  /**
   * Representation of the [[ItemAttributeGroups.attribute61]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute61: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute61', this, 'Edm.Double');
  /**
   * Representation of the [[ItemAttributeGroups.attribute62]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute62: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute62', this, 'Edm.Double');
  /**
   * Representation of the [[ItemAttributeGroups.attribute63]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute63: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute63', this, 'Edm.Double');
  /**
   * Representation of the [[ItemAttributeGroups.attribute64]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  attribute64: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Attribute64', this, 'Edm.Double');

  /**
   * Creates an instance of ItemAttributeGroupsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, ItemAttributeGroups);
  }
}

export namespace ItemAttributeGroups {
  /**
   * Metadata information on all properties of the `ItemAttributeGroups` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ItemAttributeGroups>[] = [{
    originalName: 'Attribute1',
    name: 'attribute1',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute2',
    name: 'attribute2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute3',
    name: 'attribute3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute4',
    name: 'attribute4',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute5',
    name: 'attribute5',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute6',
    name: 'attribute6',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute7',
    name: 'attribute7',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute8',
    name: 'attribute8',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute9',
    name: 'attribute9',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute10',
    name: 'attribute10',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute11',
    name: 'attribute11',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute12',
    name: 'attribute12',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute13',
    name: 'attribute13',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute14',
    name: 'attribute14',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute15',
    name: 'attribute15',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute16',
    name: 'attribute16',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute17',
    name: 'attribute17',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute18',
    name: 'attribute18',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute19',
    name: 'attribute19',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute20',
    name: 'attribute20',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute21',
    name: 'attribute21',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute22',
    name: 'attribute22',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute23',
    name: 'attribute23',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute24',
    name: 'attribute24',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute25',
    name: 'attribute25',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute26',
    name: 'attribute26',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute27',
    name: 'attribute27',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute28',
    name: 'attribute28',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute29',
    name: 'attribute29',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute30',
    name: 'attribute30',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute31',
    name: 'attribute31',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute32',
    name: 'attribute32',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Attribute33',
    name: 'attribute33',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Attribute34',
    name: 'attribute34',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Attribute35',
    name: 'attribute35',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Attribute36',
    name: 'attribute36',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Attribute37',
    name: 'attribute37',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Attribute38',
    name: 'attribute38',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Attribute39',
    name: 'attribute39',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Attribute40',
    name: 'attribute40',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Attribute41',
    name: 'attribute41',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Attribute42',
    name: 'attribute42',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Attribute43',
    name: 'attribute43',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Attribute44',
    name: 'attribute44',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Attribute45',
    name: 'attribute45',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Attribute46',
    name: 'attribute46',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Attribute47',
    name: 'attribute47',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Attribute48',
    name: 'attribute48',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Attribute49',
    name: 'attribute49',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Attribute50',
    name: 'attribute50',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Attribute51',
    name: 'attribute51',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Attribute52',
    name: 'attribute52',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Attribute53',
    name: 'attribute53',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Attribute54',
    name: 'attribute54',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Attribute55',
    name: 'attribute55',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Attribute56',
    name: 'attribute56',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Attribute57',
    name: 'attribute57',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Attribute58',
    name: 'attribute58',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Attribute59',
    name: 'attribute59',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Attribute60',
    name: 'attribute60',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Attribute61',
    name: 'attribute61',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Attribute62',
    name: 'attribute62',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Attribute63',
    name: 'attribute63',
    type: 'Edm.Double',
    isCollection: false
  }, {
    originalName: 'Attribute64',
    name: 'attribute64',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): ItemAttributeGroups {
    return deserializeComplexTypeV4(json, ItemAttributeGroups);
  }
}
