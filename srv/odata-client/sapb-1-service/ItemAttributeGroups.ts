/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export class ItemAttributeGroupsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace ItemAttributeGroups {
  export function build(json: { [keys: string]: FieldType }): ItemAttributeGroups {
    return createComplexType(json, {
      Attribute1: (attribute1: string) => ({ attribute1: edmToTs(attribute1, 'Edm.String') }),
      Attribute2: (attribute2: string) => ({ attribute2: edmToTs(attribute2, 'Edm.String') }),
      Attribute3: (attribute3: string) => ({ attribute3: edmToTs(attribute3, 'Edm.String') }),
      Attribute4: (attribute4: string) => ({ attribute4: edmToTs(attribute4, 'Edm.String') }),
      Attribute5: (attribute5: string) => ({ attribute5: edmToTs(attribute5, 'Edm.String') }),
      Attribute6: (attribute6: string) => ({ attribute6: edmToTs(attribute6, 'Edm.String') }),
      Attribute7: (attribute7: string) => ({ attribute7: edmToTs(attribute7, 'Edm.String') }),
      Attribute8: (attribute8: string) => ({ attribute8: edmToTs(attribute8, 'Edm.String') }),
      Attribute9: (attribute9: string) => ({ attribute9: edmToTs(attribute9, 'Edm.String') }),
      Attribute10: (attribute10: string) => ({ attribute10: edmToTs(attribute10, 'Edm.String') }),
      Attribute11: (attribute11: string) => ({ attribute11: edmToTs(attribute11, 'Edm.String') }),
      Attribute12: (attribute12: string) => ({ attribute12: edmToTs(attribute12, 'Edm.String') }),
      Attribute13: (attribute13: string) => ({ attribute13: edmToTs(attribute13, 'Edm.String') }),
      Attribute14: (attribute14: string) => ({ attribute14: edmToTs(attribute14, 'Edm.String') }),
      Attribute15: (attribute15: string) => ({ attribute15: edmToTs(attribute15, 'Edm.String') }),
      Attribute16: (attribute16: string) => ({ attribute16: edmToTs(attribute16, 'Edm.String') }),
      Attribute17: (attribute17: string) => ({ attribute17: edmToTs(attribute17, 'Edm.String') }),
      Attribute18: (attribute18: string) => ({ attribute18: edmToTs(attribute18, 'Edm.String') }),
      Attribute19: (attribute19: string) => ({ attribute19: edmToTs(attribute19, 'Edm.String') }),
      Attribute20: (attribute20: string) => ({ attribute20: edmToTs(attribute20, 'Edm.String') }),
      Attribute21: (attribute21: string) => ({ attribute21: edmToTs(attribute21, 'Edm.String') }),
      Attribute22: (attribute22: string) => ({ attribute22: edmToTs(attribute22, 'Edm.String') }),
      Attribute23: (attribute23: string) => ({ attribute23: edmToTs(attribute23, 'Edm.String') }),
      Attribute24: (attribute24: string) => ({ attribute24: edmToTs(attribute24, 'Edm.String') }),
      Attribute25: (attribute25: string) => ({ attribute25: edmToTs(attribute25, 'Edm.String') }),
      Attribute26: (attribute26: string) => ({ attribute26: edmToTs(attribute26, 'Edm.String') }),
      Attribute27: (attribute27: string) => ({ attribute27: edmToTs(attribute27, 'Edm.String') }),
      Attribute28: (attribute28: string) => ({ attribute28: edmToTs(attribute28, 'Edm.String') }),
      Attribute29: (attribute29: string) => ({ attribute29: edmToTs(attribute29, 'Edm.String') }),
      Attribute30: (attribute30: string) => ({ attribute30: edmToTs(attribute30, 'Edm.String') }),
      Attribute31: (attribute31: string) => ({ attribute31: edmToTs(attribute31, 'Edm.String') }),
      Attribute32: (attribute32: string) => ({ attribute32: edmToTs(attribute32, 'Edm.String') }),
      Attribute33: (attribute33: number) => ({ attribute33: edmToTs(attribute33, 'Edm.Int32') }),
      Attribute34: (attribute34: number) => ({ attribute34: edmToTs(attribute34, 'Edm.Int32') }),
      Attribute35: (attribute35: number) => ({ attribute35: edmToTs(attribute35, 'Edm.Int32') }),
      Attribute36: (attribute36: number) => ({ attribute36: edmToTs(attribute36, 'Edm.Int32') }),
      Attribute37: (attribute37: number) => ({ attribute37: edmToTs(attribute37, 'Edm.Int32') }),
      Attribute38: (attribute38: number) => ({ attribute38: edmToTs(attribute38, 'Edm.Int32') }),
      Attribute39: (attribute39: number) => ({ attribute39: edmToTs(attribute39, 'Edm.Int32') }),
      Attribute40: (attribute40: number) => ({ attribute40: edmToTs(attribute40, 'Edm.Int32') }),
      Attribute41: (attribute41: number) => ({ attribute41: edmToTs(attribute41, 'Edm.Int32') }),
      Attribute42: (attribute42: number) => ({ attribute42: edmToTs(attribute42, 'Edm.Int32') }),
      Attribute43: (attribute43: Moment) => ({ attribute43: edmToTs(attribute43, 'Edm.DateTimeOffset') }),
      Attribute44: (attribute44: Moment) => ({ attribute44: edmToTs(attribute44, 'Edm.DateTimeOffset') }),
      Attribute45: (attribute45: Moment) => ({ attribute45: edmToTs(attribute45, 'Edm.DateTimeOffset') }),
      Attribute46: (attribute46: Moment) => ({ attribute46: edmToTs(attribute46, 'Edm.DateTimeOffset') }),
      Attribute47: (attribute47: Moment) => ({ attribute47: edmToTs(attribute47, 'Edm.DateTimeOffset') }),
      Attribute48: (attribute48: number) => ({ attribute48: edmToTs(attribute48, 'Edm.Double') }),
      Attribute49: (attribute49: number) => ({ attribute49: edmToTs(attribute49, 'Edm.Double') }),
      Attribute50: (attribute50: number) => ({ attribute50: edmToTs(attribute50, 'Edm.Double') }),
      Attribute51: (attribute51: number) => ({ attribute51: edmToTs(attribute51, 'Edm.Double') }),
      Attribute52: (attribute52: number) => ({ attribute52: edmToTs(attribute52, 'Edm.Double') }),
      Attribute53: (attribute53: number) => ({ attribute53: edmToTs(attribute53, 'Edm.Double') }),
      Attribute54: (attribute54: number) => ({ attribute54: edmToTs(attribute54, 'Edm.Double') }),
      Attribute55: (attribute55: number) => ({ attribute55: edmToTs(attribute55, 'Edm.Double') }),
      Attribute56: (attribute56: number) => ({ attribute56: edmToTs(attribute56, 'Edm.Double') }),
      Attribute57: (attribute57: number) => ({ attribute57: edmToTs(attribute57, 'Edm.Double') }),
      Attribute58: (attribute58: number) => ({ attribute58: edmToTs(attribute58, 'Edm.Double') }),
      Attribute59: (attribute59: number) => ({ attribute59: edmToTs(attribute59, 'Edm.Double') }),
      Attribute60: (attribute60: number) => ({ attribute60: edmToTs(attribute60, 'Edm.Double') }),
      Attribute61: (attribute61: number) => ({ attribute61: edmToTs(attribute61, 'Edm.Double') }),
      Attribute62: (attribute62: number) => ({ attribute62: edmToTs(attribute62, 'Edm.Double') }),
      Attribute63: (attribute63: number) => ({ attribute63: edmToTs(attribute63, 'Edm.Double') }),
      Attribute64: (attribute64: number) => ({ attribute64: edmToTs(attribute64, 'Edm.Double') })
    });
  }
}
